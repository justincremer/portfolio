interface Props {
  title: string;
  description: string;
  link: string | null;
  image?: string;
}

// TODO: get project links working
const linkable = (title: string, link: string | null): JSX.Element => {
  if (link !== null) {
	return (
	  <a href={link} target="blank" className="text-xl">
		{title}
	  </a>
	);
  }

  return <p className="text-xl">{title} hello</p>;
};

const Project: React.FC<Props> = ({
  title,
  description,
  image,
  link,
}): JSX.Element => {
  return (
	<div className="">
	  {linkable(title, link)}
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
		<Project title={p.title} description={p.description} link={p.link} />
	  ))}
	</div>
  );
};
