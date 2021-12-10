import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import FoodProvider from "../store/FoodProvider";
import Layout from "../components/Layout";
import Head from "next/head";
const theme = extendTheme({
  styles: {
    global: {
      p: {
        fontSize: "md",
        color: "brand.text",
        fontWeight: "400",
      },
    },
  },
  colors: {
    brand: {
      100: "#fbdb89",
      200: "#f38e82",
      300: "#f48982",
      text: "#615551",
    },
    gray: {
      light: "#F9F5F3",
      light_2: "#f2efee",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <FoodProvider>
        <Layout>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.png" />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </FoodProvider>
    </ChakraProvider>
  );
}

export default MyApp;
