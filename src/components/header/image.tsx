interface Props {
  path?: string;
}

export const Image: React.FC<Props> = ({ path }: Props): JSX.Element | null => {
  if (path) {
	return (
	  <img
		src={process.env.PUBLIC_URL + path}
		alt="Avatar"
		className="w-40 h-40 rounded-full float-right"
	  />
	);
  }
  return null;
};
