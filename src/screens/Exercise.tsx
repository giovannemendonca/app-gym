import {
  Box,
  HStack,
  Heading,
  Icon,
  Image,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRautesProps } from "@routes/app.routes";

import BadySvg from "@assets/body.svg";
import SeriesSvg from "@assets/series.svg";
import RepetitionsSvg from "@assets/repetitions.svg";
import { Button } from "@components/Button";

export function Exercise() {
  const navigate = useNavigation<AppNavigatorRautesProps>();

  const handlerGoBack = () => {
    navigate.goBack();
  };

  return (
    <VStack flex={1}>
      <VStack px={8} bg="gray.600" pt={12}>
        <TouchableOpacity onPress={handlerGoBack}>
          <Icon as={Feather} name="arrow-left" color="green.500" size={6} />
        </TouchableOpacity>
        <HStack
          mt={4}
          mb={8}
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading color="gray.100" fontSize="lg" flexShrink={1} fontFamily="heading">
            Puxada fronta
          </Heading>
          <HStack alignItems="center">
            <BadySvg />
            <Text color="gray.200" ml={1} textTransform="capitalize">
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <ScrollView>
        <VStack p={8}>
          <Image
            w="full"
            h={80}
            source={{
              uri: "data:image/jpeg;base64,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",
            }}
            alt="Nome do Exerxício"
            mb={3}
            resizeMode="cover"
            rounded="lg"
            overflow="hidden"
          />
          <Box bg="gray.600" rounded="md" pb={4} px={4}>
            <HStack
              alignItems="center"
              justifyContent="space-around"
              mb={3}
              mt={5}
            >
              <HStack>
                <SeriesSvg />
                <Text color="gray.200" ml={2}>
                  3 séries
                </Text>
              </HStack>
              <HStack>
                <RepetitionsSvg />
                <Text color="gray.200" ml={2}>
                  12 repetições
                </Text>
              </HStack>
            </HStack>
            <Button title="Marcar como realizado" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
