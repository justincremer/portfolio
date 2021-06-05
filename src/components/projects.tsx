import { useState } from "react";
import { SectionHeader } from "./section-header";
import { SectionWrapper } from "../wrappers";

export interface IProject {
  title: string;
  description: string;
  url?: string;
  image?: string;
};

const link = (p: IProject): JSX.Element => {
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

interface IProjectProps {
  project: IProject;
  maxLength: number;
}

const Project: React.FC<IProjectProps> = ({ project, maxLength }: IProjectProps): JSX.Element => { 
	const [expanded, setExpanded] = useState(true);
	const [content, setContent] = useState(project.description.slice(0, maxLength + 1));
	
	function expansionHandler() {
		setContent(expanded ? project.description : project.description.slice(0, maxLength + 1));
		setExpanded(!expanded);
	}

	return (
		<SectionWrapper
		carded={true}
		children={
			<div>
				{link(project)}
				<p className="px-8 py-2 break-words text-lg">{content}</p>
				{project.description.length > maxLength ? <div className="w-full flex items-center justify-center left-0">
					<div className=" z-20 animate-pulse">
						<button onClick={expansionHandler}>{expanded ? "more" : "less" }</button>
					</div>
				</div> : null}
			</div>
		}
		/>
	);
};

interface ListProps {
  projects?: Array<IProject>;
  maxLength: number;
}

export const Projects: React.FC<ListProps> = ({
  projects,
  maxLength,
}: ListProps): JSX.Element => {
  if (projects !== undefined) {
	return (
	  <div>
		<SectionHeader title="Projects" />
		{projects.map((p: IProject) => (
		  <Project project={p} maxLength={maxLength}/>
		))}
	  </div>
	);
  }
  return <></>;
};
