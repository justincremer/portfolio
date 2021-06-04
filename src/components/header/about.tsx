import { SectionHeader } from "../section-header";
import { SectionWrapper } from "../../wrappers";

interface Props {
  content: string;
}

export const About: React.FC<Props> = ({ content }: Props): JSX.Element => {
  return (
	<div className="pr-6">
	  <SectionHeader title="About Me" />
	  <SectionWrapper
		carded={true}
		children={<p className="px-2 text-md break-words">{content}</p>}
	  />
	</div>
  );
};
