import HeaderNav from "../components/layout/headerNav/headerNav";
import ContextProvider from "../context/mainContext";
import "./globals.css";
import { Assistant } from "next/font/google";
const assistant = Assistant({
  subsets: [],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "DevFolio",
  description:
    "A place for developers to showcase their portfolios and projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${assistant.className}`}>
        <ContextProvider>
          <HeaderNav />
          <main>{children}</main>
        </ContextProvider>
      </body>
    </html>
  );
}
