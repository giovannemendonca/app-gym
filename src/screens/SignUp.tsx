import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import BackgraundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
};

const signUpSchema = yup.object({
  name: yup.string().required("Informe o nome."),
  email: yup.string().email("E-mail inválido.").required("informe o e-mail."),
  password: yup
    .string()
    .required("Informe a senha.")
    .min(6, "A senha deve ter no menos 6 dígitos."),
  password_confirm: yup
    .string()
    .required("Confime a senha.")
    .oneOf([yup.ref("password")], "A confirmação da senha não confere."),
});

export function SignUp() {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  const handlerGoBack = () => {
    navigation.goBack();
  };

  const handlerSingUp = (data: FormDataProps) => {
    console.log(data);
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

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Nome"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.name?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                value={value}
                onChangeText={onChange}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Senha"
                secureTextEntry
                value={value}
                onChangeText={onChange}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password_confirm"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Comfirme a senha"
                secureTextEntry
                value={value}
                onChangeText={onChange}
                errorMessage={errors.password_confirm?.message}
                onSubmitEditing={handleSubmit(handlerSingUp)}
                returnKeyType="send"
              />
            )}
          />
          <Button
            title="Criar e acessar"
            onPress={handleSubmit(handlerSingUp)}
          />
        </Center>

        <Center mt={16}>
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
