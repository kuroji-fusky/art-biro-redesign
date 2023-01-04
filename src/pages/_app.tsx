import type { AppProps } from "next/app";
import { MotionConfig } from "framer-motion";
import "@styles/globals.scss";
import useMediaReducedMotion from "@hooks/useMediaReducedMotion";
import { Layout } from "@layout/Layout";
import { useEffect } from "react";

import { Lato, Mouse_Memoirs } from "@next/font/google";
import useAppendDocumentRoot from "@hooks/useAppendDocumentRoot";

const mouseMemoirs = Mouse_Memoirs({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mouse-memoirs",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export default function App({ Component, pageProps }: AppProps) {
  useMediaReducedMotion();

  useAppendDocumentRoot({
    htmlClassName: [mouseMemoirs.variable, lato.variable],
    bodyClassName: ["motion-safe:scroll-smooth", "motion-reduce:scroll-auto"],
  });

  return (
    <MotionConfig reducedMotion="user">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MotionConfig>
  );
}
