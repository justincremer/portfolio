type Props = {
  title: string;
};

export const SectionHeader: React.FC<Props> = ({ title }): JSX.Element => {
  return <header className="mb-4 text-2xl p-5 ">{title}</header>;
};
