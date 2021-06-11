import { About } from "./about";
import { Title } from "./title";

interface Props {
  name: string;
  title: string;
  location?: string;
  image?: string;
  about: string;
  links?: any;
}

export const Header: React.FC<Props> = ({
  name,
  title,
  location,
  about,
  image,
  links,
}: Props): JSX.Element => {
  return (
    <div className=" lg:flex">
      <div className="flex justify-center order-2 xl:ml-10 ">
        <Title
          name={name}
          title={title}
          location={location}
          image={image}
          links={links}
        />
      </div>
      <div className="sm:w-10/10 lg:w-3/4 self-center md:order-1 ">
        <div className="">
        <About content={about} />
        </div>
      </div>
    </div>
  );
};
