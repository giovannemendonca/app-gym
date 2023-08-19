import { Button as ButtunNativeBase, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
};

export function Button({ title, ...props }: Props) {
  return (
    <ButtunNativeBase
      w="full"
      h={14}
      bg="green.700"
      rounded="sm"
      _pressed={{
        bg: "green.500",
      }}
      {...props}
    >
      <Text color="white" fontFamily="heading" fontSize="sm">
        {title}
      </Text>
    </ButtunNativeBase>
  );
}
