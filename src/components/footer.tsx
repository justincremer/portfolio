import { GiArrowed as Arrowed } from "react-icons/gi";

export const Footer: React.FC = (): JSX.Element => {
  return (
	<footer className="flex flex-col justify-center items-center">
	  <Arrowed />
	  <p>Made with React + Tailwind</p>
	  <p>By Justin Cremer</p>
	</footer>
  );
};
