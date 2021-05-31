export type Project = {
  title: string;
  description: string;
  url: string | null;
  image?: string;
};

const link = (p: Project): JSX.Element => {
  if (p.url !== null) {
	return (
	  <a href={p.url} target="blank" className="text-xl">
		{p.title}
	  </a>
	);
  }

  return <p className="text-xl">{p.title}</p>;
};

interface Props {
  project: Project;
}

const Project: React.FC<Props> = ({ project }: Props): JSX.Element => {
  return (
	<div className="">
	  {link(project)}
	  <img src={process.env.PUBLIC_URL + project.image} alt="" />
	  <p className="m-2 break-words">{project.description}</p>
	</div>
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
	  <div className="bg-blue-200">
		<header className="mb-4 text-2xl">Projects</header>

		{projects!.map((p: Project) => (
		  <Project project={p} />
		))}
	  </div>
	);
  }
  return <></>;
};
