import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { SectionWrapper, SectionWrapperProps } from "../core/section-wrapper";

interface Props {
  /** The props of the containing element (which is SectionWrapper) */
  _wrapper?: SectionWrapperProps;
}

export const Header = (props: Props) => {
  return (
    <SectionWrapper bg="background" {...props._wrapper}>
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
    </SectionWrapper>
  );
};