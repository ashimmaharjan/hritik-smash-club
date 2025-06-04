import "./globals.css";

import { Tourney } from "next/font/google";

const tourney = Tourney({
  subsets: ["latin"],
});

export const metadata = {
  title: "Hritik Smash Club",
  description: "Our second home.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${tourney.className} overflow-x-hidden bg-[#020000]`}>
        {children}
      </body>
    </html>
  );
}
