import { PageWrapper } from "../wrappers";
import { Header, Techs, Projects, Footer } from "../components";
import type { Link, TechList, Project } from "../components";

export type Config = {
  name: string;
  title: string;
  image: string;
  about: string;
  links?: Array<Link>;
  techs: TechList;
  projects?: Array<Project>;
};

interface Props {
  config: Config;
}

export const Portfolio: React.FC<Props> = ({ config }: Props): JSX.Element => {
  return (
	<PageWrapper
	  children={
		<div>
		  <Header
			name={config.name}
			title={config.title}
			image={config.image}
			about={config.about}
			links={config.links}
		  />
		  <Techs
			known={config.techs.known}
			workingOn={config.techs.workingOn}
		  />
		  <Projects projects={config.projects} />
		  <Footer />
		</div>
	  }
	/>
  );
};
