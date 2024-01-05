import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";

export default function Header() {
  return (
    <Container maxW={"7xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={5} mt="20px">
          <Heading color={"#fe9a1b"}>FashionFreaks</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
            ut labore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore Lorem ipsum dolor
            sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore
          </Text>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://img.freepik.com/free-photo/top-view-accessoires-travel-with-women-clothing-concept-white_1921-107.jpg?w=740&t=st=1703830019~exp=1703830619~hmac=c04db5856026340518a629d2cd8ac5fad706cd2800b1e2c19f02c02dc49fbefa"
            }
            objectFit={"cover"}
          />
          {/* <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://media.istockphoto.com/id/1206800961/photo/online-shopping-and-payment-man-using-tablet-with-shopping-cart-icon-digital-marketing.jpg?s=612x612&w=0&k=20&c=qG_9JB9ll4P5to97_HVxzMqhhzF0Gi1nWM_hNeiotbk="
            }
            objectFit={"cover"}
          /> */}
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
