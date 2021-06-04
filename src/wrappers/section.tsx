interface Props {
  carded: boolean;
  children: JSX.Element;
}

export const SectionWrapper: React.FC<Props> = ({
  carded,
  children,
}): JSX.Element => {
  if (carded) {
	return (
	  <div className="m-4 p-4 rounded-lg text-black bg-white bg-opacity-85">
		{children}
	  </div>
	);
  }

  return <div className="m-4 p-4">{children}</div>;
};
