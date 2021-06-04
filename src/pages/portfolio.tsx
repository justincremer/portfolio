import { Header, Experience, Projects, Footer } from "../components";
import type { Link, ExpList, Project } from "../components";

export type Config = {
  name: string;
  title: string;
  image: string;
  about: string;
  links?: Array<Link>;
  experience: ExpList;
  projects?: Array<Project>;
};

interface Props {
  config: Config;
}

export const Portfolio: React.FC<Props> = ({ config }: Props): JSX.Element => {
  return (
	<div>
	  <div id="Header" className="mb-8">
		<Header
		  name={config.name}
		  title={config.title}
		  image={config.image}
		  about={config.about}
		  links={config.links}
		/>
	  </div>
	  <div id="Experience" className="mb-8">
		<Experience
		  known={config.experience.known}
		  workingOn={config.experience.workingOn}
		/>
	  </div>
	  <div id="Projects" className="mb-8">
		<Projects projects={config.projects} />
	  </div>
	  <Footer />
	</div>
  );
};
