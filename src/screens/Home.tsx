import { useState } from "react";
import { HomeHeader } from "@components/HomeHeader";
import {
  VStack,
  FlatList,
  HStack,
  Heading,
  Text,
} from "native-base";
import { Group } from "./Group";
import { ExerciseCard } from "@components/ExerciseCard";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRautesProps } from "@routes/app.routes";

export function Home() {
  const [groups, setGroups] = useState<string[]>([
    "Costas",
    "Ombros",
    "Bíceps",
    "Tríceps",
  ]);
  const [exercises, setExercises] = useState<string[]>([
    "puxada frontal",
    "remada sentada",
    "remada curvada",
    "puxada alta",
    "elevação lateral",
    "elevação frontal",
  ]);

  const [groupSelected, setGroupSelected] = useState<string>("Costas");

  const navigate = useNavigation<AppNavigatorRautesProps>();

  const hanlderOpenExerciseDetails = () => {
    navigate.navigate("exercise");
  };

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            onPress={() => setGroupSelected(item)}
            name={item}
            isAciveted={item.toUpperCase() === groupSelected.toUpperCase()}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{
          px: 8,
        }}
        my={10}
        maxH={10}
        minH={10}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md" fontFamily="heading">
            Exercícios
          </Heading>
          <Text color="gray.200" fontSize="sm">
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={(item) => (
            <ExerciseCard onPress={hanlderOpenExerciseDetails} />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{
            pb: 20,
          }}
        />
      </VStack>
    </VStack>
  );
}
