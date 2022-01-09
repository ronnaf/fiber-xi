import {Box, Button, Flex, Grid, GridItem, Heading, HStack, Text, VStack} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import heroIllustration from "../../public/hero-Illustration.png";
import {SectionComponentProps, SectionWrapper} from "../core/section-wrapper";

export const HeroSection = (props: SectionComponentProps) => {
  return (
    <SectionWrapper bg="background" {...props._wrapper}>
      <Grid
        templateColumns={["1fr", "repeat(2, 1fr)"]}
        gridTemplateAreas={["'illustration' 'text-block' ", "'text-block illustration'"]}
        alignItems="center">
        {/* Text block */}
        <GridItem gridArea="text-block" w="100%">
          <VStack spacing={5} alignItems="flex-start">
            {/* Rating */}
            <HStack spacing={4} display={["none", "block"]}>
              {/* Stars */}
              <HStack>
                {[...new Array(5)].map((_, i) => (
                  <Box key={i} h="3" w="3" bg="orange.400" />
                ))}
              </HStack>
              {/* Rating text */}
              <Text>Rated 4.8/5 (243 reviews)</Text>
            </HStack>
            {/* Heading */}
            <Heading as="h1" size="2xl">
              Create your portfolio in minutes.
            </Heading>
            {/* Subheading */}
            <Text>
              With Fiber, you can setup your own personal portfolio in minutes with dozens of premade, beautiful
              templates.
            </Text>
            {/* Call to action */}
            <Flex w={["full", "unset"]} wrap={["wrap", "nowrap"]}>
              <Button w={["full", "unset"]} mb={["4", "unset"]} mr={["unset", "4"]}>
                Start Free Trial
              </Button>
              <Button variant="link" w={["full", "unset"]}>
                View Examples
              </Button>
            </Flex>
            {/* Featurettes */}
            <Flex w={["full", "unset"]} wrap={["wrap", "nowrap"]}>
              <HStack w={["full", "unset"]} mb={["2", "unset"]} mr={["unset", "4"]}>
                <Box h="3" w="3" bg="secondary" />
                <Text>No credit card required</Text>
              </HStack>
              <HStack w={["full", "unset"]}>
                <Box h="3" w="3" bg="secondary" />
                <Text>10 free templates</Text>
              </HStack>
            </Flex>
          </VStack>
        </GridItem>
        {/* Illustration */}
        <GridItem gridArea="illustration" w="100%">
          <Image src={heroIllustration} alt="hero-illustration" />
        </GridItem>
      </Grid>
    </SectionWrapper>
  );
};
