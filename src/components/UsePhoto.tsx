import { IImageProps, Image } from "native-base";

type Props = IImageProps & {
  size?: number;
};

export function UsePhoto({ size, ...props }: Props) {
  return (
    <Image
      height={size}
      width={size}
      borderWidth={2}
      rounded="full"
      borderColor="gray.400"
      {...props}
    />
  );
}
