import type { NextPage } from "next";
import Head from "next/head";
import { FeaturesSection } from "../components/home/features-section";
import { Header } from "../components/home/header";
import { HeroSection } from "../components/home/hero-section";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Fiber</title>
        <meta name="description" content="Create your portfolio in minutes." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header _wrapper={{ pb: 0 }} />
        <HeroSection _wrapper={{ pt: 0 }} />
        <FeaturesSection _wrapper={{ py: 16 }} />
      </main>
    </div>
  );
};

export default Home;
