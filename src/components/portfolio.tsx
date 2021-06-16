import { Header, Experience, Projects, Footer } from ".";
import type { ILink, ExpList, IProject } from ".";

export type Config = {
  name: string;
  title: string;
  location?: string;
  image: string;
  about: string;
  links?: Array<ILink>;
  experience: ExpList;
  projects?: Array<IProject>;
  maxProjectDescriptionLength: number;
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
		  location={config.location!}
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
		<Projects
		  projects={config.projects!}
		  maxLength={config.maxProjectDescriptionLength}
		/>
	  </div>
	  <Footer />
	</div>
  );
};
