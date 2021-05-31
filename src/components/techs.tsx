interface Tech {
  name: string;
  link: string | null;
}

const link = (i: Tech): JSX.Element => {
  if (i.link !== null) {
	return (
	  <a href={i.link} target="blank">
		{i.name}
	  </a>
	);
  }

  return <>{i.name}</>;
};

const knownList = (known: Array<Tech>): JSX.Element => (
  <div>{known.map((i: Tech) => link(i))}</div>
);

const workingOnList = (known: Array<Tech>): JSX.Element => {
  switch (known.length) {
	case 1:
	  return <p>Currently working on {link(known[0])}.</p>;
	case 2:
	  return (
		<p>
		  Currently working on {link(known[0])} and {link(known[1])}.
		</p>
	  );
	case 3:
	  return (
		<p>
		  Currently working on {link(known[0])}, {link(known[1])}, and{" "}
		  {link(known[2])}.
		</p>
	  );
	default:
	  return <></>;
  }
};

export interface TechList {
  known: Array<Tech>;
  workingOn: Array<Tech>;
}

export const Techs: React.FC<TechList> = ({
  known,
  workingOn,
}: TechList): JSX.Element => {
  return (
	<div className="bg-red-200">
	  {knownList(known)}
	  {workingOnList(workingOn)}
	</div>
  );
};
