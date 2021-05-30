interface Props {
  title: string;
  description: string;
  image?: string;
}

const Project: React.FC<Props> = ({
  title,
  description,
  image,
}): JSX.Element => {
  return (
	<div className="">
	  <p className="text-xl">{title}</p>
	  <img src={process.env.PUBLIC_URL + image} alt="" />
	  <p className="m-2 break-words">{description}</p>
	</div>
  );
};

interface ListProps {
  projects?: Array<Props>;
}

export const Projects: React.FC<ListProps> = ({
  projects,
}: ListProps): JSX.Element => {
  return (
	<div className="bg-blue-200">
	  <header className="mb-4 text-2xl">Projects</header>

	  {projects!.map((p: Props) => (
		<Project title={p.title} description={p.description} />
	  ))}
	</div>
  );
};
