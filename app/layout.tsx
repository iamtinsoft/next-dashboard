import "@/app/ui/global.css";
import { space_grotesk } from "@/app/ui/fonts";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${space_grotesk.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
