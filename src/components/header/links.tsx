export type Link = {
  url: string;
  image: string;
  alt: string;
};

const Link: React.FC<Link> = ({ url, image, alt }: Link): JSX.Element => {
  return (
	<a href={url} target="blank">
	  <img src={image} alt={alt} height="30" width="40" />
	</a>
  );
};

type Props = {
  links: Array<Link>;
};

export const Links: React.FC<Props> = ({ links }: Props): JSX.Element => {
  return (
	<div className="flex bg-purple-200 justify-evenly">
	  {links!.map((l: Link) => (
		<Link url={l.url} image={l.image} alt={l.alt} />
	  ))}
	</div>
  );
};
