import { redirect } from "next/navigation";
import { HomeTemplate } from "@/components/templates";
import { LOCATIONS } from "@/lib/site";

const HomePage = async () => {
  redirect(LOCATIONS.posts);
  return <HomeTemplate />;
};

export default HomePage;
