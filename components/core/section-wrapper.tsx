import {Box, BoxProps, Container, ContainerProps} from "@chakra-ui/react";
import React, {ReactNode} from "react";

export interface SectionComponentProps {
  /** The props of the containing element (which is SectionWrapper) */
  _wrapper?: SectionWrapperProps;
}

export interface SectionWrapperProps extends BoxProps {
  /** The props for the Container inside Box */
  _inner?: ContainerProps;
}

export const SectionWrapper = (props: SectionWrapperProps) => {
  return (
    <Box {...props}>
      <Container maxW="5xl" px={[8, 12, 12, 12, 0]} {...props._inner}>
        {props.children}
      </Container>
    </Box>
  );
};
