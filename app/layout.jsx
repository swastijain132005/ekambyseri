export const metadata = {
  title: "Ekam By Seri",
  description: "Maati Leepan Decor",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}