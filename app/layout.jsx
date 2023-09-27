import HeaderNav from "../components/layout/headerNav/headerNav";
import "./globals.css";
import { Assistant } from "next/font/google";
const assistant = Assistant({
  subsets: [],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${assistant.className}`}>
        <HeaderNav />
        <main>{children}</main>
      </body>
    </html>
  );
}
