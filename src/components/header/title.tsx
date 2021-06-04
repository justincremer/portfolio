import { Image } from "./image";
import { Links, Link } from "./links";
import { SectionWrapper } from "../../wrappers/section";

export interface Props {
  name: string;
  title: string;
  image?: string;
  links: Array<Link>;
}

export const Title: React.FC<Props> = ({
  name,
  title,
  image,
  links,
}: Props): JSX.Element => {
  return (
    <div className="float-right text-right">
      <header className="text-3xl">{name}</header>
      <p className="text-lg">{title}</p>
      <div className="float-right flex pt-3">
        <Links links={links} />
        <Image image={image} />
      </div>
    </div>
  );
};
