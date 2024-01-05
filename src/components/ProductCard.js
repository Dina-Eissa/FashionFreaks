// ProductCard.js
import React from "react";
import {
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Flex,
} from "@chakra-ui/react";
import { useCart } from "./CartContext";
import { FiShoppingCart } from "react-icons/fi";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
      margin={5}
      padding={2}
    >
      <Image
        src={product.imageURL}
        alt={`Picture of ${product.name}`}
        roundedTop="lg"
      />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          {product.isNew && (
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
              New
            </Badge>
          )}
          {product.isNew === false && (
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="blue">
              In Stock
            </Badge>
          )}
        </Box>
        <Flex mt="1" justifyContent="space-between" alignContent="center">
          <Box
            fontSize="1xl"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {product.name}
          </Box>
          <Tooltip
            label="Add to cart"
            bg="white"
            placement={"top"}
            color={"gray.800"}
            fontSize={"1.2em"}
          >
            <chakra.a
              href={"#"}
              display={"flex"}
              onClick={() => addToCart(product)}
            >
              <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
            </chakra.a>
          </Tooltip>
        </Flex>

        <Flex justifyContent="space-between" alignContent="center">
          <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
            <Box as="span" color={"gray.600"} fontSize="lg">
              $
            </Box>
            {product.price.toFixed(2)}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductCard;
