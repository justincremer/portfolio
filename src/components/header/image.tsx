interface Props {
  image?: string;
}

export const Image: React.FC<Props> = ({
  image,
}: Props): JSX.Element | null => {
  if (image) {
	return (
	  <img
		src={"images/" + image}
		alt="Avatar"
		className="w-40 h-40 rounded-full float-right"
	  />
	);
  }
  return null;
};
