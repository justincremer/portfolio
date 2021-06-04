import { SectionHeader } from "./section-header";
import { SectionWrapper } from "../wrappers";

interface Exp {
  name: string;
  link?: string;
}

const link = (e: Exp): JSX.Element => {
  if (e.link) {
	return (
	  <a
		href={e.link}
		target="blank"
		className="text-blue-800 hover:text-blue-500"
	  >
		{e.name}
	  </a>
	);
  }

  return <>{e.name}</>;
};

const knownList = (known: Array<Exp>): JSX.Element => (
  <div className="flex flex-wrap">
	{known.map((i: Exp) => (
	  <p className="w-1/4 text-center">{link(i)}</p>
	))}
  </div>
);

const workingOnList = (known: Array<Exp>): JSX.Element => {
  switch (known.length) {
	case 1:
	  return <p>Currently learning {link(known[0])}.</p>;
	case 2:
	  return (
		<p>
		  Currently learning {link(known[0])} and {link(known[1])}.
		</p>
	  );
	case 3:
	  return (
		<p className="text-lg">
		  Currently learning {link(known[0])}, {link(known[1])}, and{" "}
		  {link(known[2])}.
		</p>
	  );
	default:
	  return <></>;
  }
};

export interface ExpList {
  known: Array<Exp>;
  workingOn: Array<Exp>;
}

export const Experience: React.FC<ExpList> = ({
  known,
  workingOn,
}: ExpList): JSX.Element => {
  return (
	<div>
	  <SectionHeader title="Experience" />
	  <SectionWrapper
		carded={true}
		children={
		  <div className="pt-4">
			<div className="justify-evenly mb-4 text-xl">
			  {knownList(known)}
			</div>
			<div className="text-right text-md">{workingOnList(workingOn)}</div>
			<p className="break-words">{}</p>
		  </div>
		}
	  />
	</div>
  );
};
