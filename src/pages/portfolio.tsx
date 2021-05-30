import { Header, Techs, Projects, Footer } from "../components";
import { PageWrapper } from "../wrappers";

/* import * as toml from "toml"; */
/* toml.parse; */

interface Props {
  name: string;
  title: string;
  image: string;
  about: string;
  links: any;
  projects: any;
}

export const Portfolio: React.FC<Props> = ({
  name,
  title,
  image,
  about,
  links,
  projects,
}: Props): JSX.Element => {
  return (
	<PageWrapper
	  children={
		<div>
		  <Header
			name={name}
			title={title}
			image={image}
			about={about}
			links={links}
		  />
		  <Techs />
		  <Projects projects={projects} />
		  <Footer />
		</div>
	  }
	/>
  );
};
