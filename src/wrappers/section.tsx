interface Props {
  carded: boolean;
  child: JSX.Element;
}

export const SectionWrapper: React.FC<Props> = ({
  carded,
  child,
}): JSX.Element => {
  if (carded) {
	return (
	  <div className="m-4 p-4 rounded-lg text-black bg-white bg-opacity-85">
		{child}
	  </div>
	);
  }

  return <div className="m-4 p-4">{child}</div>;
};
