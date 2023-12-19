import { inter } from "@/lib/site";

export default async function RootLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
