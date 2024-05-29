import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Style from "./admin.module.css";
import { Toaster } from "react-hot-toast";
import Link from "next/link";
import { AdminNav } from "./admin_Nav/adminNav";
import { AdminSideNav } from "./admin_side_nav/adminSideNav";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Admin Panel",
  description:
    "Next.js portfolio,TypeScript portfolio,MongoDB projects,JavaScript developer portfolio,HTML5 portfolio,CSS3 design,Redux state management portfolio,Front-end developer portfolio,Full-stack developer portfolio,Responsive web design portfolio,Modern web development,Server-side rendering portfolio,Scalable web applications portfolio,Dynamic web projects,Tailwind CSS design,Next.js and TypeScript projects,MongoDB web development,React and Redux portfolio,SEO-friendly portfolio,Progressive web apps portfolio,JavaScript frameworks portfolio,Interactive web design,Developer showcase,Custom web solutions,Web application showcase",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="  ">
      <div className=" fixed left-0 top-0 w-full z-50">
        <AdminNav />
      </div>
      {/* side_nav_start */}

      <AdminSideNav />

      {/* side_nav_end */}
      <div className=" mainBody pt-20">{children}</div>
    </main>
  );
}
