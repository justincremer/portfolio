import { Header, Techs, Projects, Footer } from "../components";
import { PageWrapper } from "../wrappers";

interface Props {
  name: string;
  title: string;
  image: string;
  about: string;
  links: any;
  known: any;
  workingOn: any;
  projects: any;
}

export const Portfolio: React.FC<Props> = ({
  name,
  title,
  image,
  about,
  links,
  known,
  workingOn,
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
		  <Techs known={known} workingOn={workingOn} />
		  <Projects projects={projects} />
		  <Footer />
		</div>
	  }
	/>
  );
};
