// Cart.js
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Box, Text, VStack, Image, Icon } from "@chakra-ui/react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Shopping Cart
      </Text>
      {cart.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <VStack spacing={4} align="stretch">
          {cart.map((item) => (
            <Box
              key={item.id}
              borderWidth="1px"
              rounded="lg"
              p={4}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Image
                src={item.imageURL}
                alt={`Picture of ${item.name}`}
                rounded="lg"
                width="50px"
                mr="10"
              />
              <Text mr="10">{item.name}</Text>

              <Box
                color="red"
                size="sm"
                padding="0px"
                cursor="pointer"
                onClick={() => removeFromCart(item.id)}
              >
                <Icon as={FaTrashAlt} />
              </Box>
            </Box>
          ))}
        </VStack>
      )}
    </Box>
  );
};

export default Cart;
