import { useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import {
  Center,
  ScrollView,
  VStack,
  Skeleton,
  Text,
  Heading,
  useToast,
} from "native-base";

import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { FileInfo } from "expo-file-system";

import { UsePhoto } from "@components/UsePhoto";
import { ScreenHeader } from "@components/ScreenHeader";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

const PHOTO_SIZE = 33;

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState<boolean>(false);
  const [userPhoto, setUserPhoto] = useState<string>(
    "https://github.com/giovannemendonca.png"
  );

  const toast = useToast();

  const handlerUserPhotoSelect = async () => {
    try {
      setPhotoIsLoading(true);
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });
      if (photoSelected.canceled) {
        return;
      }
      if (photoSelected.assets[0].uri) {
        const photoInfo = (await FileSystem.getInfoAsync(
          photoSelected.assets[0].uri
        )) as FileInfo;

        if (photoInfo.size && photoInfo.size / 1024 / 1024 > 3) {
          return toast.show({
            title: "A imagem deve ter no máximo 3MB",
            placement: "top",
            bgColor: "red.500",
          });
        }

        setUserPhoto(photoSelected.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setPhotoIsLoading(false);
    }
  };

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 36,
        }}
      >
        <Center mt={6} px={10}>
          {photoIsLoading ? (
            <Skeleton
              h={PHOTO_SIZE}
              w={PHOTO_SIZE}
              rounded="full"
              startColor="gray.500"
              endColor="gray.400"
            />
          ) : (
            <UsePhoto
              source={{
                uri: userPhoto,
              }}
              alt="Foto de perfil"
              size={PHOTO_SIZE}
            />
          )}
          <TouchableOpacity onPress={handlerUserPhotoSelect}>
            <Text
              color="green.500"
              fontWeight="bold"
              fontSize="md"
              mt={2}
              mb={8}
            >
              alterar foto
            </Text>
          </TouchableOpacity>

          <Input placeholder="Nome" bg="gray.600" />
          <Input
            placeholder="E-mail"
            value="giovanne@dev.com"
            bg="gray.600"
            isDisabled
          />

          <Heading
            color="gray.200"
            fontSize="md"
            mb={2}
            mt={12}
            alignSelf="flex-start"
            fontFamily="heading"
          >
            Alterar senha
          </Heading>
          <Input placeholder="Senha antiga" bg="gray.600" secureTextEntry />
          <Input placeholder="Nova Senha" bg="gray.600" secureTextEntry />
          <Input
            placeholder="Confirme nova Senha"
            bg="gray.600"
            secureTextEntry
          />
          <Button title="Atualizar" mt={4} />
        </Center>
      </ScrollView>
    </VStack>
  );
}
