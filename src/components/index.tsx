import * as React from "react";
import NextLink from "next/link";
import { styled } from "../stitches.config";
import { useTheme } from "./theme";

export const Box = styled("div", {
  include: "box",
});

export const Button = styled("button", {
  include: "box",
  appearance: "none",
  lineHeight: 1,
  paddingTop: "$1",
  paddingBottom: "$1",
  paddingLeft: "$3",
  paddingRight: "$3",
  borderWidth: "2px",
  borderStyle: "$button",
  borderColor: "$buttonBorder",
  color: "$buttonText",
  backgroundColor: "$buttonBackground",
  fontWeight: "bold",
});

export const VStack = styled("div", {
  $$vStackGap: "$space$4",
  include: "box",
  "> * + *": { marginTop: "$$vStackGap" },
});

export const Text = styled("p", { include: "box", fontFamily: "$body" });

export const Heading = styled("h2", { include: "box", fontFamily: "$heading" });

export const Container = styled("div", {
  include: "box",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "$4",
  paddingRight: "$4",
  maxWidth: "$container",
});

export const Divider = styled("hr", {
  include: "box",
  marginBottom: 0,
  border: 0,
  borderTop: "2px solid $divider",
});

export const Link = styled("a", {
  include: "box",
  variants: {
    variant: {
      inline: {
        color: "$link",
      },
      nav: {
        color: "$text",
        textDecoration: "none",
        "&:hover, &:focus": {
          textDecoration: "underline",
          textDecorationStyle: "dotted",
        },
      },
    },
  },
  defaultVariants: {
    variant: "inline",
  },
});

export const Layout = (props) => {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Container
        as="header"
        css={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "$4",
          paddingBottom: "$4",
        }}
      >
        <Heading as="h1">
          <NextLink href="/" passHref>
            <Link variant="nav">Stitches SSR Issue</Link>
          </NextLink>
        </Heading>
        <Button onClick={() => theme.toggle()}>Switch Theme</Button>
      </Container>
      <Container as="main" css={{ paddingBottom: "$8" }} {...props} />
    </React.Fragment>
  );
};
