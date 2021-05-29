import { Title, Links, Techs, Projects, Footer } from "../components";

/* import * as toml from "toml"; */
/* toml.parse; */

export const Portfolio: React.FC = (): JSX.Element => {
  return (
	<div className="m-10">
	  <Title name="Justin Cremer" title="Software Engineer" image="cat.jpg" />
	  <Links />
	  <Techs />
	  <Projects
		projects={[
		  { title: "title", description: "description", image: "cat.jpg" },
		  { title: "title2", description: "description2" },
		]}
	  />
	  <Footer />
	</div>
  );
};
