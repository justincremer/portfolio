export const Footer: React.FC = (): JSX.Element => {
  return (
	<footer className="flex flex-col justify-center items-center">
	  <img
		className="mx-auto w-10 h-10 my-4"
		src={"images/happy-doge.png"}
		alt="Avatar"
	  />
	  <p>Made with React + Tailwind</p>
	  <p>By Justin Cremer</p>
	</footer>
  );
};
