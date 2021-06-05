export interface ILink {
  url: string;
  icon: JSX.Element;
};

const Link: React.FC<ILink> = ({ url, icon }: ILink): JSX.Element => {
  return (
	<a href={url} target="blank">
	  {icon}
	  
	</a>
  );
};

type Props = {
  links: Array<ILink>;
};

export const Links: React.FC<Props> = ({ links }: Props): JSX.Element => {
  return (
	<div className="mr-3">
	  {links!.map((l: ILink) => (
		<div className="pb-3">
		  <Link url={l.url} icon={l.icon} />
		</div>
	  ))}
	</div>
  );
};
