import { Box, BoxProps, Container, ContainerProps } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props extends BoxProps {
  /** The props for the Container inside Box */
  _inner?: ContainerProps;
}

export const SectionWrapper = (props: Props) => {
  return (
    <Box py="12" {...props}>
      <Container maxW="5xl" {...props._inner}>
        {props.children}
      </Container>
    </Box>
  );
};
