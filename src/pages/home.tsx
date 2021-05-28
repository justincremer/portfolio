import { Title, Links, Techs, Projects, Footer } from "../components";

export const Home: React.FC = (): JSX.Element => {
  return (
	<div className="m-10">
	  <Title name="Justin Cremer" title="Software Engineer" path="cat.jpg" />
	  <Links />
	  <Techs />
	  <Projects />
	  <Footer />
	</div>
  );
};
