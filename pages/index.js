import { getFood } from "../food/getFood";
import { Fragment } from "react";
import { Heading, Text } from "@chakra-ui/react";
import HomeList from "../components/HomeOptions/HomeList";
export default function Home(props) {
  console.log(props.food);

  return (
    <Fragment>
      <Heading
        display="inline-block"
        pt={4}
        mx={10}
        textTransform="uppercase"
        bgGradient="linear(to-b, brand.100,brand.300)"
        bgClip="text"
        transition="all 0.2s linear"
        _hover={{
          transform: "translateY(-2px)",
        }}
      >
        Discover
      </Heading>
      <HomeList food={props.food} />
    </Fragment>
  );
}
export async function getStaticProps() {
  const foodArr = getFood();
  return {
    props: {
      food: [...foodArr],
    },
  };
}
