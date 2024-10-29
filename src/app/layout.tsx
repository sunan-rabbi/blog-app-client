import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "optional",
});

export const metadata: Metadata = {
  title: "Blogiz",
  description:
    "Welcome to Blogiz – where innovation meets imagination in the dynamic realm of technology, offering a thrilling journey through the latest trends and groundbreaking discoveries in the world of tech!",
};


const Provider = dynamic(() => import("@/lib/Provider"), { ssr: false });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={roboto.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
