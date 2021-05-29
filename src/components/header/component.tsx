import { Links } from "./links";
import { About } from "./about";
import { Title } from "./title";

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
	<div className="flex ">
	  <div className="w-3/4">
		<Links links={links} />
		<About content={about} />
	  </div>
	  <div className="w-1/4 bg-green-200">
		<Title name={name} title={title} image={image} />
	  </div>
	</div>
  );
};
