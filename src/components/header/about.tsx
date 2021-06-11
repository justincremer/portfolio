import { SectionHeader } from "../section-header";
import { SectionWrapper } from "../../wrappers";

interface Props {
  content: string;
}

export const About: React.FC<Props> = ({ content }: Props): JSX.Element => {
  return (
    <div className=" ">
      <div className="xs:mt-10 ">
      <SectionHeader title="About Me" />
      <SectionWrapper
        carded={true}
        child={<p className="px-2 break-words text-lg">{content}</p>}
      />
      </div>
    </div>
  );
};
