import { Image } from "./image";
import { Links, ILink } from "./links";
import { BiMap as Map } from "react-icons/bi";

export interface Props {
  name: string;
  title: string;
  location?: string;
  image?: string;
  links: Array<ILink>;
}

export const Title: React.FC<Props> = ({
  name,
  title,
  location,
  image,
  links,
}: Props): JSX.Element => {
  return (
    <div className=" text-right xs:mt-5 sm:mt-5 md:-mt-5 ">
      <header className="text-3xl">{name}</header>
      <div className="mr-4">
        <p className="text-lg">{title}</p>
        <div className="float-right flex pt-3 pb-2">
          <div className="flex items-center justify-center">
            <Links links={links} />
          </div>
          {image ? <Image image={image} /> : null}
        </div>
        {location ? <p className="ml-2 text-md">{location}</p> : null}
      </div>
    </div>
  );
};
