import { useState } from "react";
import { HomeHeader } from "@components/HomeHeader";
import { VStack, FlatList } from "native-base";
import { Group } from "./Group";

export function Home() {
  const [groups, setGroups] = useState<string[]>([
    "Costa",
    "Ombro",
    "Peito",
    "Tríceps",
  ]);
  const [groupSelected, setGroupSelected] = useState<string>("costa");

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Group
            onPress={() => setGroupSelected("costa")}
            name="costa"
            isAciveted={groupSelected === "costa"}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{
          px:8,
        }}
        my={10}
        maxH={10}
      />
    </VStack>
  );
}
