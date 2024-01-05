import React, { useState } from "react";
import {
  Flex,
  Heading,
  Box,
  Divider,
  IconButton,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaGifts, FaGlasses, FaShoePrints } from "react-icons/fa";
import ProductCard from "./ProductCard";
import { sunglassesData, beltsData, shoesData } from "../data/productsData";

function CategorySection({ category, data, categoryIcon }) {
  const [startIndex, setStartIndex] = useState(0);
  const endIndex = startIndex + 3;
  const visibleProducts = data.slice(startIndex, endIndex);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, data.length - 3));
  };

  return (
    <Flex direction="column" justify="center" ml="20px" mr="20px">
      <RowHeader categoryIcon={categoryIcon}>{category}</RowHeader>
      <Flex
        w="full"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        position="relative"
      >
        {visibleProducts.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            style={{
              flexBasis: { base: "100%", sm: "48%", md: "30%", lg: "30%" },
            }}
          />
        ))}
        <IconButton
          icon={<FaArrowLeft />}
          aria-label="Previous"
          size="lg"
          position="absolute"
          left={0}
          top="50%"
          transform="translateY(-50%)"
          color={useColorModeValue("teal.500", "teal.200")}
          onClick={handlePrev}
          display={startIndex > 0 ? "block" : "none"}
          padding="15px"
        />
        <IconButton
          icon={<FaArrowRight />}
          aria-label="Next"
          size="lg"
          position="absolute"
          right={0}
          top="50%"
          transform="translateY(-50%)"
          color={useColorModeValue("teal.500", "teal.200")}
          onClick={handleNext}
          display={endIndex < data.length ? "block" : "none"}
          padding="15px"
        />
      </Flex>
    </Flex>
  );
}

function RowHeader({ children, categoryIcon }) {
  return (
    <Box m={10} position="relative">
      <Heading as="h2" color="gray.500" fontSize="25px">
        <Icon as={categoryIcon} boxSize={6} mr={2} /> {children}
      </Heading>
      <Divider
        position="absolute"
        top="50px"
        left={0}
        width="100%"
        borderColor="#fe9a1b"
        borderBottomWidth="2px"
      />
    </Box>
  );
}

function ProductList() {
  return (
    <>
      <CategorySection
        category="Sunglasses"
        data={sunglassesData}
        categoryIcon={FaGlasses}
      />
      <CategorySection
        category="Belts"
        data={beltsData}
        categoryIcon={FaGifts}
      />
      <CategorySection
        category="Shoes"
        data={shoesData}
        categoryIcon={FaShoePrints}
      />
    </>
  );
}

export default ProductList;
