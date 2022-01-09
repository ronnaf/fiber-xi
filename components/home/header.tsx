import {Button, HStack} from "@chakra-ui/react";
import React from "react";
import {SectionComponentProps, SectionWrapper} from "../core/section-wrapper";

export const Header = (props: SectionComponentProps) => {
  return (
    <SectionWrapper bg="background" {...props._wrapper}>
      {/* Desktop */}
      <HStack justifyContent="space-between" display={["none", "flex"]}>
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
      {/* Mobile */}
      <HStack justifyContent="space-between" display={["flex", "none"]}>
        <Button variant="link">Fiber</Button>
        <Button variant="link">=</Button>
      </HStack>
    </SectionWrapper>
  );
};
