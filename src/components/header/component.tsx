import { About } from "./about";
import { Title } from "./title";
import { SectionWrapper } from "../../wrappers";

interface Props {
  name: string;
  title: string;
  about: string;
  image?: string;
  links?: any;
}

export const Header: React.FC<Props> = ({
  name,
  title,
  about,
  image,
  links,
}: Props): JSX.Element => {
  return (
	<div className="flex">
	  <div className="w-3/4">
		<About content={about} />
	  </div>
	  <div className="w-1/4">
		<Title name={name} title={title} image={image} links={links} />
	  </div>
	</div>
  );
};
