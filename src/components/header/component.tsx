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
	<div className="md:flex">
	  <div className="w-3/4">
		<About content={about} />
	  </div>
	  <div className="w-1/4">
		<Title
		  name={name}
		  title={title}
		  location={location}
		  image={image}
		  links={links}
		/>
	  </div>
	</div>
  );
};
