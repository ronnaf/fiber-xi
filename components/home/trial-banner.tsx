import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { SectionComponentProps, SectionWrapper } from "../core/section-wrapper";
import portfolioSample from "../../public/portfolio-sample.png";

export const TrialBanner = (props: SectionComponentProps) => {
  return (
    <SectionWrapper {...props._wrapper}>
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
