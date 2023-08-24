import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "../styles/global.css";
import DarkProvider  from "./components/DarkProvider";

export const metadata = {
  title: "Contact Me",
  description:
    "Web application for e-mail service for Contact Me portfolio forms",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background">
        {/* <main className="z-10 flex flex-col w-full items-center"> */}
          <DarkProvider>
          <div className="flex">
            <Sidebar />
          <div className="flex-1">
            <Header />
            {children}
            {/* <Footer /> */}
            </div>
          </div>
          </DarkProvider>
        {/* </main> */}
      </body>
    </html>
  );
}
