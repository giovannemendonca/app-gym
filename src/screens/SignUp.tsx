import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import BackgraundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export function SignUp() {
  const navigation = useNavigation();

  const handlerGoBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10}>
        <Image
          source={BackgraundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
          defaultSource={BackgraundImg}
        />
        <Center my={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">
            Treine sua mente e seu corpo
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Crie sua conta
          </Heading>

          <Input placeholder="Nome" />

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secureTextEntry />

          <Button title="Criar e acessar" />
        </Center>

        <Center mt={24}>
          <Button
            title="Voltar para o login"
            variant="outline"
            onPress={handlerGoBack}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}
