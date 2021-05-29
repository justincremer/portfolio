export interface Project {
  title: string;
  description: string;
  image?: string;
}

const Project: React.FC<Project> = ({
  title,
  description,
  image,
}): JSX.Element => {
  return (
	<div className="m-3">
	  <p className="text-xl">{title}</p>
	  <img src={process.env.PUBLIC_URL + image} />
	  <p>{description}</p>
	</div>
  );
};

interface ProjectsProps {
  projects?: Array<Project>;
}

export const Projects: React.FC<ProjectsProps> = ({
  projects,
}: ProjectsProps): JSX.Element => {
  return (
	<div className="m-4">
	  <header className="text-2xl">Projects</header>
	  {projects!.map((p: Project) => (
		<Project title={p.title} description={p.description} />
	  ))}
	</div>
  );
};
