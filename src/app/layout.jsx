import "@fontsource/roboto";
import "./globals.css";

export const metadata = {
  title: "Muhammad Sohaib",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className="roboto">{children}</body>
      </html>
    </>
  );
}
