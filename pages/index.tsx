import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { SectionWrapper } from "../components/section-wrapper";
import heroIllustration from "../public/hero-Illustration.png";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Fiber</title>
        <meta name="description" content="Create your portfolio in minutes." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SectionWrapper bg="background">
          <HStack justifyContent="space-between">
            <Button variant="link">Fiber</Button>
            <HStack>
              <Button variant="ghost">Community</Button>
              <Button variant="ghost">Pricing</Button>
              <Button variant="ghost">Features</Button>
            </HStack>
            <HStack>
              <Button variant="ghost">Sign In</Button>
              <Button>Sign Up</Button>
            </HStack>
          </HStack>
          <Grid templateColumns="1fr 1fr" py="10" alignItems="center">
            <GridItem w="100%">
              <VStack spacing={5} alignItems="flex-start">
                {/* Rating */}
                <HStack spacing={4}>
                  <HStack>
                    {[...new Array(5)].map((_, i) => (
                      <Box key={i} h="3" w="3" bg="yellow.400" />
                    ))}
                  </HStack>
                  <Text>Rated 4.8/5 (243 reviews)</Text>
                </HStack>
                <Heading as="h1" size="2xl">
                  Create your portfolio in minutes.
                </Heading>
                <Text>
                  With Fiber, you can setup your own personal portfolio in
                  minutes with dozens of premade, beautiful templates.
                </Text>
                <HStack spacing={8}>
                  <Button>Start Free Trial</Button>
                  <Button variant="link">View Examples</Button>
                </HStack>
                <HStack spacing={6}>
                  <HStack>
                    <Box h="3" w="3" bg="secondary" />
                    <Text>No credit card required</Text>
                  </HStack>
                  <HStack>
                    <Box h="3" w="3" bg="secondary" />
                    <Text>10 free templates</Text>
                  </HStack>
                </HStack>
              </VStack>
            </GridItem>
            <GridItem w="100%">
              <Image src={heroIllustration} alt="hero-illustration" />
            </GridItem>
          </Grid>
        </SectionWrapper>
      </main>
    </div>
  );
};

export default Home;
