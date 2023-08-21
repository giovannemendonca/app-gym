import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { HStack, Heading, Text, VStack, Icon } from "native-base";

import { UsePhoto } from "./UsePhoto";

export function HomeHeader() {
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      
      <UsePhoto
        alt="imagem de perfil"
        source={{ uri: "https://github.com/giovannemendonca.png" }}
        size={16}
        mr={4}
      />
      
      <VStack flex={1}>
        <Text color={"gray.100"} fontSize="md">
          Olá
        </Text>
        <Heading color={"gray.100"} fontSize="md" fontFamily="heading">
          Giovanne
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon as={MaterialIcons} name="logout" color="gray.200" size={7} />
      </TouchableOpacity>
    
    </HStack>
  );
}
