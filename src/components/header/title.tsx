import { Image } from "./image";
import { Links, Link } from "./links";

export interface Props {
  name: string;
  title: string;
  location?: string;
  image?: string;
  links: Array<Link>;
}

export const Title: React.FC<Props> = ({
  name,
  title,
  location,
  image,
  links,
}: Props): JSX.Element => {
  return (
    <div className="float-right text-right">
      <header className="text-3xl">{name}</header>
      <div className="mr-4">
        <p className="text-lg">{title}</p>
        <div className="float-right flex pt-3 pb-2">
          <div className="flex items-center justify-center">
            <Links links={links} />
          </div>
          <Image image={image} />
        </div>
        {location ? <p className="text-md">{location}</p> : null}
      </div>
    </div>
  );
};
