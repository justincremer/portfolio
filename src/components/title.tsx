interface HeadshotProps {
  path?: string;
}

const Headshot: React.FC<HeadshotProps> = ({
  path,
}: HeadshotProps): JSX.Element | null => {
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

interface TitleProps extends HeadshotProps {
  name: string;
  title: string;
  path?: string;
}

export const Title: React.FC<TitleProps> = ({
  name,
  title,
  path,
}: TitleProps): JSX.Element => {
  return (
    <div className="text-right">
      <header className="text-4xl">{name}</header>
      <p className="text-md mb-6">{title}</p>
      <Headshot path={path} />
    </div>
  );
};
