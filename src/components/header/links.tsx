export type Link = {
  url: string;
  icon: JSX.Element;
};

const Link: React.FC<Link> = ({ url, icon }: Link): JSX.Element => {
  return (
	<a href={url} target="blank">
	  {icon}
	  {/* <img src={image} alt={alt} height="30" width="40" /> */}
	</a>
  );
};

type Props = {
  links: Array<Link>;
};

export const Links: React.FC<Props> = ({ links }: Props): JSX.Element => {
  return (
	<div className="mr-3">
	  {links!.map((l: Link) => (
		<div className="pb-3">
		  <Link url={l.url} icon={l.icon} />
		</div>
	  ))}
	</div>
  );
};
