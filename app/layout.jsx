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
        {/* <img
          src="/fire-1680605.jpg"
          alt=""
          className="fixed top-0 right-0 left-0 bottom-0 object-cover object-center h-screen w-screen blur-lg"
        /> */}
        <main
        //  className="bg-black bg-opacity-90 "
        >
          {children}
        </main>
      </body>
    </html>
  );
}
