import { HomeTemplate } from "@/components/templates";
import { PAGE_TITLE_PREFIX } from "@/lib/site";

export const metadata = {
  title: `${PAGE_TITLE_PREFIX}`,
};

const HomePage = async () => {
  return <HomeTemplate />;
};

export default HomePage;
