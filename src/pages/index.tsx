import { useInView } from "react-intersection-observer";
import PageContainer from "../components/Base/PageContainer";
import HeroSection from "../components/Sections/Hero";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import AboutSection from "../components/Sections/About";

export default function Home() {
  return (
    <PageContainer title="Home">
      <HeroSection />
      <AboutSection />
      <FanartSection />
    </PageContainer>
  );
}

function FanartSection() {
  const { ref, inView } = useInView({
    rootMargin: "0px 0px -55.5% 0px",
  });

  return <section ref={ref} className="bg-red-100 h-[110vh] w-full"></section>;
}
