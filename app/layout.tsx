import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anderson Julca — Selected Work",
  description: "Portafolio de Anderson Julca: dirección de arte, diseño visual, web y modelado 3D",
  metadataBase: new URL("https://anderson-julca-portfolio.andersonj.chatgpt.site"),
  openGraph: {
    title: "Anderson Julca — Selected Work",
    description: "Dirección de arte, diseño visual, web y modelado 3D",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Anderson Julca — Selected Work" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anderson Julca — Selected Work",
    description: "Dirección de arte, diseño visual, web y modelado 3D",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
