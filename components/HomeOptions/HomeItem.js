import React from "react";
import { Box, Image, Text, Heading } from "@chakra-ui/react";
import Link from "next/link";
export default function HomeItem({ imageUrl, title, publisher, id }) {
  return (
    <Link href={`/${id}`} passHref>
      <Box
        bg="gray.100"
        p={6}
        borderRadius="md"
        boxShadow="xl"
        cursor="pointer"
      >
        <Image
          src={imageUrl}
          alt="some pic"
          h="xs"
          borderRadius="md"
          objectFit="cover"
          w="100%"
          mb={2}
        />
        <Heading color="brand.300">{title}</Heading>
        <Text>{publisher}</Text>
      </Box>
    </Link>
  );
}
