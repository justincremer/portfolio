import { Image } from "./image";

interface Props {
  name: string;
  title: string;
  image?: string;
}

export const Title: React.FC<Props> = ({
  name,
  title,
  image,
  ...rest
}: Props): JSX.Element => {
  return (
    <div className="float-right text-right bg-green-200" {...rest}>
      <header className="text-4xl">{name}</header>
      <p className="text-md mb-6">{title}</p>
      <Image path={image} />
    </div>
  );
};
