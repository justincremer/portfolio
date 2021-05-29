export interface Props {
  url: string;
  image: string;
  alt: string;
}

export const Link: React.FC<Props> = ({
  url,
  image,
  alt,
}: Props): JSX.Element => {
  return (
	<a href={url} target="blank">
	  <img src={image} alt={alt} height="30" width="40" />
	</a>
  );
};

interface ListProps {
  links?: Array<Props>;
}

export const Links: React.FC<ListProps> = ({
  links,
}: ListProps): JSX.Element => {
  return (
	<div className="flex bg-purple-200">
	  {links!.map((l: Props) => (
		<Link url={l.url} image={l.image} alt={l.alt} />
	  ))}
	</div>
  );
};
