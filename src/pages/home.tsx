import { Title, Links, Techs, Projects, Footer } from "../components";

export const Home: React.FC = (): JSX.Element => {
  return (
	<div className="m-4">
	  <Title />
	  <Links />
	  <Techs />
	  <Projects />
	  <Footer />
	</div>
  );
};
