import { Notice } from "./_templates/Notice";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <Notice
      message="I couldn't find the page you were looking for."
      action={{
        href: "/",
        label: "Go back",
        iconLeft: "arrowLeft",
      }}
    />
  );
}
