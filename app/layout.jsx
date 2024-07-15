import { JetBrains_Mono, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainMono",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata = {
  title: "d41k1-portfolio",
  description: "d41k1のポートフォリオサイトです。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={`${jetBrainsMono.variable} ${notoSansJP.variable}`}>
        <body className="font-mono">
          <Header />
          {children}
          <Footer />
        </body>
      </body>
    </html>
  );
}
