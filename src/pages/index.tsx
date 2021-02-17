import * as React from "react";
import { NextPage } from "next";
import {
  Box,
  Divider,
  Heading,
  Layout,
  Link,
  Text,
  VStack,
} from "../components";

const Index: NextPage = () => (
  <Layout>
    <VStack>
      <Heading>Summary</Heading>
      <Text>
        On initial load or after hard refresh, the following issues occur
        periodically:
      </Text>

      <Box as="ol">
        <Box as="li">Flash of Unstyled Content (FOUC)</Box>
        <Box as="li">
          Flash of "Unthemed" Content (initial styles are visible, but without
          the initial theme)
        </Box>
      </Box>

      <Text>
        <Link href="https://github.com/joe-bell/issue-repro-stitches-ssr">
          View Source
        </Link>{" "}
        |{" "}
        <Link href="https://github.com/modulz/stitches/issues/404">
          See the GitHub Issue
        </Link>
      </Text>

      <Divider
        css={{
          $$dividerMargin: "$space$4",
          marginTop: "calc($$vStackGap + $$dividerMargin)",
          paddingBottom: "$$dividerMargin",
        }}
      />

      <Heading as="h2">Placeholder Content</Heading>
      <Text>Some meaningless Lipsum content just for testing purposes…</Text>

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        euismod libero id ipsum lacinia, at fringilla neque blandit. Sed vel
        eros et nibh bibendum efficitur. Integer leo mi, tristique at imperdiet
        et, bibendum id orci. In hac habitasse platea dictumst. In eget justo
        ex. Vivamus pretium consectetur egestas. Aliquam ornare enim sed
        consectetur tristique. Duis dapibus tempor turpis, vel accumsan urna
        laoreet ut. Duis tincidunt, lorem in dignissim cursus, metus justo
        dignissim urna, eget lacinia velit arcu non dolor. Fusce non feugiat
        diam. Integer tincidunt gravida diam, in ultricies risus scelerisque in.
        Vivamus pharetra tincidunt magna in blandit.
      </Text>

      <Text>
        Nulla condimentum facilisis tellus, sit amet pretium arcu suscipit et.
        Phasellus at nibh vulputate, viverra eros sed, dictum ex. Fusce at ante
        sed massa venenatis semper sit amet et velit. Vivamus vulputate dolor
        quis urna fermentum pretium. Maecenas lectus ligula, consectetur vitae
        arcu a, facilisis elementum ligula. Duis venenatis ipsum a rhoncus
        vulputate. Donec mattis tristique maximus. Suspendisse volutpat nisi
        ligula, nec semper eros pellentesque sed. Nullam eget cursus velit,
        porttitor fermentum dolor. Sed id nisi quam. Aenean in metus porttitor
        elit lacinia imperdiet.
      </Text>

      <Text>
        Pellentesque ac tortor dui. Sed nisl ipsum, tempor sit amet euismod eu,
        posuere convallis mauris. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Curabitur sit amet aliquam felis. Nam auctor nec sapien
        ut accumsan. Donec sodales urna suscipit metus imperdiet dictum. Sed
        dictum non lacus vitae bibendum. Nulla sodales vehicula dolor ut
        vulputate. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Mauris eget nunc laoreet, tristique nisi
        eu, rutrum urna. Quisque tristique et metus ac bibendum. Donec non
        egestas tellus. Sed ullamcorper tempor sagittis.
      </Text>

      <Text>
        Sed lobortis consequat metus et gravida. Pellentesque cursus mattis
        scelerisque. Donec tempor lacinia arcu, vitae iaculis nibh commodo et.
        Maecenas lectus nulla, rutrum ac tortor et, lacinia dignissim metus.
        Maecenas volutpat sed nunc quis placerat. Aenean eu lectus diam. Sed
        sagittis in est id pellentesque. Suspendisse potenti. Fusce ultrices mi
        ac sem bibendum feugiat a eu lectus. Sed arcu dolor, egestas vitae elit
        ac, efficitur pharetra lorem. Phasellus venenatis ornare fringilla. Sed
        finibus odio vel sapien faucibus tincidunt. Maecenas sed est suscipit
        lacus auctor eleifend at viverra eros. Cras aliquam elit non tortor
        cursus maximus. Duis in tortor id enim eleifend imperdiet vitae at orci.
        Vivamus in erat tellus.
      </Text>

      <Text>
        Praesent posuere id ex eget luctus. Aliquam porta libero quis cursus
        imperdiet. Curabitur malesuada, leo nec porttitor semper, nulla elit
        egestas mauris, sit amet semper nisl quam sit amet augue. Suspendisse
        porta quam vitae sem egestas placerat. Nulla viverra commodo augue nec
        tempus. Nunc eu scelerisque diam. Maecenas eget blandit eros. Interdum
        et malesuada fames ac ante ipsum primis in faucibus. Sed condimentum
        quis mauris non cursus. Vestibulum tincidunt faucibus arcu sit amet
        egestas. Donec blandit consequat lectus eget scelerisque. Duis mauris
        lacus, sagittis sit amet felis sollicitudin, malesuada tincidunt lorem.
        Quisque ut nisl a massa ultricies rutrum. Aliquam congue, ex vitae
        euismod vehicula, est lorem semper urna, vitae cursus massa ligula a
        augue.
      </Text>
    </VStack>
  </Layout>
);

export default Index;
