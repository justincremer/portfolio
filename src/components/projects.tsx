interface ProjectProps {
  title: string;
  content: string;
}

const Project: React.FC<ProjectProps> = ({ title, content }): JSX.Element => {
  return (
	<div>
	  <p className="text-xl">{title}</p>
	  <p>{content}</p>
	</div>
  );
};

export const Projects: React.FC = (): JSX.Element => {
  return (
	<div className="m-4">
	  <p className="text-2xl">Projects</p>
	  <Project title="test1" content="test2" />
	  <Project title="test3" content="test4" />
	</div>
  );
};
