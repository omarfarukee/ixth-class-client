import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="lofi">
      <body className={inter.className}>
        <Toaster/>
        <div className="shadow-md navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-0 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link href='/'>HOME</Link></li>
                <li><Link href='/createAccount'>Account</Link></li>
                <li><Link href='/'>HOME</Link></li>
                
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <a className="text-xl btn btn-ghost">IX-TH CLASS</a>
          </div>
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
              <button><FaUserCircle className="text-4xl" /></button>
              </div>
            </button>
          </div>
        </div>

        {children}

      </body>
    </html>
  );
}
