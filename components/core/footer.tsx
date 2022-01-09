import {Box, Grid, GridItem, Text, VStack} from "@chakra-ui/react";
import React from "react";
import {SectionComponentProps, SectionWrapper} from "./section-wrapper";

export const Footer = (props: SectionComponentProps) => {
  return (
    <footer>
      <SectionWrapper bg="background" py={12}>
        <Grid templateColumns={["1fr", "1fr", "1fr 2fr"]} gap={[8, 8, 12]}>
          <GridItem w="100%">
            <VStack alignItems="flex-start" spacing={1}>
              <Text fontWeight="bold">Fiber</Text>
              <Text fontSize="sm">
                With Fiber, you can setup your own personal portfolio in minutes with dozens of premade, beautiful
                templates.
              </Text>
            </VStack>
            <Box my={[4, 4, 8]} />
            <Text>Made with ❤ by Ronna</Text>
          </GridItem>
          <GridItem w="100%">
            <Grid templateColumns={["1fr", "1fr", "repeat(4, 1fr)"]} gap={8}>
              <GridItem w="100%">
                <Text fontWeight="bold">Sitemap</Text>
                <Box my={3} />
                <VStack alignItems="flex-start" spacing={2}>
                  <Text fontSize="sm">Homepage</Text>
                  <Text fontSize="sm">Pricing</Text>
                  <Text fontSize="sm">Testimonials</Text>
                  <Text fontSize="sm">Features</Text>
                </VStack>
              </GridItem>
              <GridItem w="100%">
                <Text fontWeight="bold">Resources</Text>
                <Box my={3} />
                <VStack alignItems="flex-start" spacing={2}>
                  <Text fontSize="sm">Support</Text>
                  <Text fontSize="sm">Contact</Text>
                  <Text fontSize="sm">FAQ</Text>
                </VStack>
              </GridItem>
              <GridItem w="100%">
                <Text fontWeight="bold">Company</Text>
                <Box my={3} />
                <VStack alignItems="flex-start" spacing={2}>
                  <Text fontSize="sm">About</Text>
                  <Text fontSize="sm">Customers</Text>
                  <Text fontSize="sm">Blog</Text>
                </VStack>
              </GridItem>
              <GridItem w="100%">
                <Text fontWeight="bold">Portfolios</Text>
                <Box my={3} />
                <VStack alignItems="flex-start" spacing={2}>
                  <Text fontSize="sm">Sarah Andrews</Text>
                  <Text fontSize="sm">Mathew Higgins</Text>
                  <Text fontSize="sm">Janice Dave</Text>
                </VStack>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </SectionWrapper>
    </footer>
  );
};
