import { SectionHeader } from "./section-header";
import { SectionWrapper } from "../wrappers";

export type Project = {
  title: string;
  description: string;
  url?: string;
  image?: string;
};

const link = (p: Project): JSX.Element => {
  const body = <p className="px-2 text-xl">{p.title}</p>;
  if (p.url) {
	return (
	  <a
		href={p.url}
		target="blank"
		className="text-xl text-blue-800 hover:text-blue-500"
	  >
		{body}
	  </a>
	);
  }

  return body;
};

interface Props {
  project: Project;
}

const Project: React.FC<Props> = ({ project }: Props): JSX.Element => {
  return (
	<SectionWrapper
	  carded={true}
	  children={
		<div className="">
		  {link(project)}
		  <p className="px-8 py-2 break-words text-lg">{project.description}</p>
		</div>
	  }
	/>
  );
};

interface ListProps {
  projects?: Array<Project> | undefined;
}

export const Projects: React.FC<ListProps> = ({
  projects,
}: ListProps): JSX.Element => {
  if (projects !== undefined) {
	return (
	  <div>
		<SectionHeader title="Projects" />
		{projects.map((p: Project) => (
		  <Project project={p} />
		))}
	  </div>
	);
  }
  return <></>;
};
