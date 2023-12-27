import { redirect } from "next/navigation";
import { LOCATIONS } from "@/lib/site";

const HomePage = async () => {
  redirect(LOCATIONS.posts);
};

export default HomePage;
