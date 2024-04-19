// Personal website for Grover Cleveland using Chakra UI and react-icons
import { Box, Container, Heading, Text, Image, VStack, Link, Icon, Button } from "@chakra-ui/react";
import { FaBirthdayCake, FaHistory, FaUniversity, FaGavel, FaExternalLinkAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={5}>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1585066039154-a748070bc611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxHcm92ZXIlMjBDbGV2ZWxhbmR8ZW58MHx8fHwxNzEzNTA4NDgzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Grover Cleveland" />
        <Heading as="h1" size="xl">
          Grover Cleveland
        </Heading>
        <Text fontSize="lg">22nd and 24th President of the United States</Text>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="md">
            <Icon as={FaBirthdayCake} /> Born
          </Heading>
          <Text fontSize="md">March 18, 1837, Caldwell, New Jersey, U.S.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="md">
            <Icon as={FaHistory} /> Presidency
          </Heading>
          <Text fontSize="md">First term: 1885–1889, Second term: 1893–1897</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="md">
            <Icon as={FaUniversity} /> Education
          </Heading>
          <Text fontSize="md">Attended Fayetteville Academy and Clinton Liberal Academy</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="md">
            <Icon as={FaGavel} /> Career
          </Heading>
          <Text fontSize="md">Lawyer, Sheriff of Erie County, Mayor of Buffalo, Governor of New York</Text>
        </Box>

        <Link href="https://en.wikipedia.org/wiki/Grover_Cleveland" isExternal>
          <Button rightIcon={<FaExternalLinkAlt />} colorScheme="blue">
            Learn More
          </Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default Index;
