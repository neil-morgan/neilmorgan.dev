import { CategoryMetaProps } from "@/types";
import { getClient } from "@/lib/apollo";
import { SkillCategoryDocument } from "@/graphql";
import { APOLLO_CLIENTS } from "@/constants";

import { getAllSkillCategoryItems } from "@/services";

export const revalidate = 1;

const { CMS } = APOLLO_CLIENTS;

export async function generateMetadata({ params }: CategoryMetaProps) {
  const { data } = await getClient().query({
    context: { clientName: CMS },
    query: SkillCategoryDocument,
    variables: {
      slug: params.category,
    },
  });
  return { title: `${data?.skillCategory?.items[0]?.title} skills` };
}

const SkillCategoryPage = async ({
  params,
}: {
  params: { category: string };
}) => {
  const data = await getAllSkillCategoryItems(params.category);

  return <>{<pre>{JSON.stringify(data, null, 2)}</pre>}</>;
};

export default SkillCategoryPage;
