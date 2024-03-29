import { getBase64 } from "@/helpers";
import { isImageUrl } from "@/utils";

type InputObjectType = {
  [key: string]: any;
};

type ImageMap = {
  [title: string]: string;
};

export const extractImagesToBase64Map = async (
  input: InputObjectType,
): Promise<ImageMap> => {
  let imageMap: ImageMap = {};
  const recurse = async (
    currentObject: InputObjectType,
    imageMap: ImageMap,
  ): Promise<void> => {
    let promises = [];
    for (const key in currentObject) {
      const value = currentObject[key];

      if (typeof value === "object" && value !== null) {
        promises.push(recurse(value, imageMap));
      } else if (key === "url" && isImageUrl(value)) {
        const imageTitle = currentObject.title;
        promises.push(
          (async () => {
            const base64 = await getBase64(value);
            if (
              base64 &&
              typeof imageTitle === "string" &&
              !(imageTitle in imageMap)
            ) {
              imageMap[imageTitle] = base64;
            }
          })(),
        );
      }
    }
    await Promise.all(promises);
  };

  await recurse(input, imageMap);
  return imageMap;
};
