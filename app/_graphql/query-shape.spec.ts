import { Kind, parse, type FieldNode, type SelectionSetNode } from "graphql";
import { describe, expect, it } from "vitest";
import { PageContentBySlugDocument, SectionContentDocument } from "./generated";

const selectedFields = (source: string) => {
  const { definitions } = parse(source);
  const fragments = new Map(
    definitions
      .filter((definition) => definition.kind === Kind.FRAGMENT_DEFINITION)
      .map((fragment) => [fragment.name.value, fragment]),
  );
  const fields = new Map<string, FieldNode>();

  const collect = (selectionSet: SelectionSetNode, path: string[]) => {
    for (const selection of selectionSet.selections) {
      if (selection.kind === Kind.FRAGMENT_SPREAD) {
        const fragment = fragments.get(selection.name.value);
        if (!fragment) {
          throw new Error(`Missing fragment: ${selection.name.value}`);
        }
        collect(fragment.selectionSet, path);
      } else if (selection.kind === Kind.INLINE_FRAGMENT) {
        collect(selection.selectionSet, path);
      } else {
        const fieldPath = [...path, selection.name.value];
        fields.set(fieldPath.join("."), selection);
        if (selection.selectionSet) {
          collect(selection.selectionSet, fieldPath);
        }
      }
    }
  };

  for (const definition of definitions) {
    if (definition.kind === Kind.OPERATION_DEFINITION) {
      collect(definition.selectionSet, []);
    }
  }

  return fields;
};

describe("GraphQL query shapes", () => {
  it("keeps section cards lightweight without reducing collection limits", () => {
    const fields = selectedFields(SectionContentDocument.toString());
    const collection = "sectionCollection.items.contentCollection";
    const card = `${collection}.items`;

    for (const field of [
      "sys.id",
      "sys.publishedAt",
      "title",
      "slug",
      "image.focalPoint",
      "image.image.url",
      "image.image.description",
      "image.image.width",
      "image.image.height",
      "contentfulMetadata.tags.name",
    ]) {
      expect(fields.has(`${card}.${field}`), field).toBe(true);
    }
    expect(fields.has(`${card}.content`)).toBe(false);

    for (const [path, limit] of [
      ["sectionCollection", "1"],
      [collection, "100"],
      [`${card}.skillsCollection`, "20"],
    ]) {
      expect(
        fields.get(path)?.arguments?.find(({ name }) => name.value === "limit")
          ?.value,
      ).toMatchObject({ kind: Kind.INT, value: limit });
    }
  });

  it("preserves full-page rich text and metadata for rendering and live preview", () => {
    const fields = selectedFields(PageContentBySlugDocument.toString());
    const page = "pageCollection.items";

    for (const field of [
      "content.json",
      "content.links.entries.block.sys.id",
      "content.links.entries.inline.sys.id",
      "content.links.assets.block.url",
      "contentfulMetadata.tags.name",
      "sys.publishedAt",
    ]) {
      expect(fields.has(`${page}.${field}`), field).toBe(true);
    }
  });
});
