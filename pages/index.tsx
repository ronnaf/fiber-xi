import type {NextPage} from "next";
import Head from "next/head";
import {Footer} from "../components/core/footer";
import {FeaturesSection} from "../components/home/features-section";
import {Header} from "../components/home/header";
import {HeroSection} from "../components/home/hero-section";
import {TestimonialsSection} from "../components/home/testimonials-section";
import {TrialBanner} from "../components/home/trial-banner";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Fiber</title>
        <meta name="description" content="Create your portfolio in minutes." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header _wrapper={{py: 8}} />
        <HeroSection _wrapper={{pt: 4, pb: 24}} />
        <FeaturesSection _wrapper={{my: 16}} />
        <TrialBanner _wrapper={{my: 16}} />
        <TestimonialsSection _wrapper={{my: 16}} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
