interface ProjectProps {
  title: string;
  content: string;
}

const Project: React.FC<ProjectProps> = ({ title, content }): JSX.Element => {
  return (
	<div className="m-3">
	  <p className="text-xl">{title}</p>
	  <p>{content}</p>
	</div>
  );
};

export const Projects: React.FC = (): JSX.Element => {
  return (
	<div className="m-4">
	  <header className="text-2xl">Projects</header>
	  <Project title="test1" content="test2" />
	  <Project title="test3" content="test4" />
	</div>
  );
};
