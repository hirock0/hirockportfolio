import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav/nav";
import Side_Nav from "@/components/side_menu/side_menu";
import Bottom from "@/components/bottom/bottom";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Hirock Portfolio",
  description:
    "Next.js portfolio,TypeScript portfolio,MongoDB projects,JavaScript developer portfolio,HTML5 portfolio,CSS3 design,Redux state management portfolio,Front-end developer portfolio,Full-stack developer portfolio,Responsive web design portfolio,Modern web development,Server-side rendering portfolio,Scalable web applications portfolio,Dynamic web projects,Tailwind CSS design,Next.js and TypeScript projects,MongoDB web development,React and Redux portfolio,SEO-friendly portfolio,Progressive web apps portfolio,JavaScript frameworks portfolio,Interactive web design,Developer showcase,Custom web solutions,Web application showcase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster
          toastOptions={{
            style: {
              background: "rgb(51 65 85)",
              color: "#fff",
            },
          }}
        />
        <div>{children}</div>

        <div>
          <Nav />
          <Side_Nav />
          <Bottom />
        </div>
      </body>
    </html>
  );
}
