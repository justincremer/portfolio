interface Props {
  content: string;
}

export const About: React.FC<Props> = ({ content }: Props): JSX.Element => {
  return <p className="bg-yellow-200 break-words">{content}</p>;
};
