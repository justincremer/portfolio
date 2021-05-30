interface Tech {
  name: string;
  link: string | null;
}

interface Props {
  known: Array<Tech>;
  workingOn: Array<Tech>;
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

const workingOnList = (known: Array<Tech>): JSX.Element => (
  <div>{known.map((i: Tech) => link(i))}</div>
);

export const Techs: React.FC<Props> = ({
  known,
  workingOn,
}: Props): JSX.Element => {
  return (
	<div className="bg-red-200">
	  {knownList(known)}
	  {workingOnList(workingOn)}
	</div>
  );
};
