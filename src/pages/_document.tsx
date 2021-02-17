import * as React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { getCssString } from "../stitches.config";

export default class Document extends NextDocument {
  render() {
    const styles = getCssString();

    return (
      <Html lang="en">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: styles }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
