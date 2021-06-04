interface Props {
  children: JSX.Element;
}

export const SectionWrapper: React.FC<Props> = ({ children }): JSX.Element => (
  <div className="m-4 p-4 rounded-lg text-black bg-white bg-opacity-85">
	{children}
  </div>
);
