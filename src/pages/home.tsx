import { Title, Headshot, Links, Techs, Projects, Footer } from "../components";

export const Home: React.FC = (): JSX.Element => {
  return (
	<div className="m-10">
	  <Title />
	  <Headshot />
	  <Links />
	  <Techs />
	  <Projects />
	  <Footer />
	</div>
  );
};
