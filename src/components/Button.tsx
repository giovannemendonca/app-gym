import { Button as ButtunNativeBase, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
  variant?: "outline" | "solid";
};

export function Button({ title, variant = "solid", ...props }: Props) {
  return (
    <ButtunNativeBase
      w="full"
      h={14}
      bg={variant === "outline" ? "transparent" : "green.500"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor="green.500"
      rounded="sm"
      _pressed={{
        bg: variant === "outline" ? "gray.500" : "green.700",
      }}
      {...props}
    >
      <Text
        color={variant === "outline" ? "green.500" : "white"}
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </ButtunNativeBase>
  );
}
