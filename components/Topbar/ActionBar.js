import { HStack, Icon, Text } from "@chakra-ui/react";
export default function ActionBar({
  children,
  icon,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) {
  return (
    <HStack
      h="100%"
      px={4}
      transition="all 0.2s ease-in-out"
      _hover={{ bgColor: "gray.light_2" }}
      cursor="pointer"
      onMouseEnter={onMouseEnter || null}
      onMouseLeave={onMouseLeave || null}
      onClick={onClick}
    >
      <Icon as={icon} color="brand.200" h={7} w={7} />
      <Text fontWeight="500">{children}</Text>
    </HStack>
  );
}
