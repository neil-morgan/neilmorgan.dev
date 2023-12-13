import { redirect } from "next/navigation";
import { draftMode } from "next/headers";
import { HomePageTemplate } from "@/components/templates";
import type { SlugProps, SlugMetaProps } from "@/types";
import { PostTemplate } from "@/components/templates";
import { getFeatureFlags } from "@/helpers";
import { getClient } from "@/lib/apollo";
import {
  CategoryDocument,
  TestDocument,
  Post,
  CreatePostDataDocument,
  PostSlugsDocument,
  PostDataDocument,
} from "@/graphql";
import { APOLLO_CLIENTS } from "@/lib/site";

const HomePage = async () => {
  const { data } = await getClient().query({
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
    query: TestDocument,
  });

  console.log(data);

  return (
    <>
      {data.post?.title}
      <HomePageTemplate />
    </>
  );
};

export default HomePage;
