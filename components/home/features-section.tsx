import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import codeIcon from "../../public/icons/code-icon.svg";
import responsiveIcon from "../../public/icons/responsive-icon.svg";
import stopwatchIcon from "../../public/icons/stopwatch-icon.svg";
import portfolioSample from "../../public/portfolio-sample.png";
import { SectionComponentProps, SectionWrapper } from "../core/section-wrapper";

type Feature = {
  iconSrc: string;
  title: string;
  subtitle: string;
};

const features: Feature[] = [
  {
    iconSrc: stopwatchIcon,
    title: "Build in minutes",
    subtitle:
      "With a selection of premade templates, you can build out a portfolio in less than 10 minutes",
  },
  {
    iconSrc: codeIcon,
    title: "Add custom CSS",
    subtitle:
      "Customize your personal portfolio even more with the ability to add your own custom CSS styles.",
  },
  {
    iconSrc: responsiveIcon,
    title: "Responsive",
    subtitle:
      "All Fiber templates are fully responsive to ensure the experience is seemless across all devices",
  },
];

export const FeaturesSection = (props: SectionComponentProps) => {
  return (
    <SectionWrapper {...props._wrapper}>
      <VStack alignItems="flex-start" spacing={10}>
        <VStack alignItems="flex-start" spacing={3}>
          <Heading as="h3" size="sm" color="brand.500">
            Why Fiber?
          </Heading>
          <Heading as="h2" size="lg">
            A good portfolio means good <br /> employability.
          </Heading>
        </VStack>
        <SimpleGrid columns={3} spacing={8}>
          {features.map((feature) => (
            <Box key={feature.title}>
              <Box boxSize={9}>
                <Image src={feature.iconSrc} alt="feature-icon" />
              </Box>
              <Box my={5} />
              <VStack alignItems="flex-start" spacing={3}>
                <Heading as="h3" size="sm">
                  {feature.title}
                </Heading>
                <Text>{feature.subtitle}</Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
      <Box my={16} />
      <Box bg="brand.500" p={10} borderRadius="md">
        <Grid templateColumns="3fr 4fr" gap={10}>
          <GridItem w="100%" display="flex" alignItems="center">
            <VStack alignItems="flex-start" spacing={3}>
              <Heading as="h2" size="lg" color="white">
                Diversify your portfolio.
              </Heading>
              <Text color="white" lineHeight="1.75">
                Create an even more impressive portfolio by creating case
                studies for your projects. Simply follow our step-by-step guide.
              </Text>
              <Button variant="inverted-solid">Start Free Trial</Button>
            </VStack>
          </GridItem>
          <GridItem w="100%">
            <Box mb={-12}>
              <Image src={portfolioSample} alt="portfolio-sample" />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </SectionWrapper>
  );
};
