import { Header, Techs, Projects, Footer } from "../components";
import { PageWrapper } from "../wrappers";

/* import * as toml from "toml"; */
/* toml.parse; */

export const Portfolio: React.FC = (): JSX.Element => {
  return (
	<PageWrapper
	  children={
		<div>
		  <Header
			name="Justin Cremer"
			title="Software Engineer"
			image="cat.jpg"
			about={about}
			links={links}
		  />
		  <Techs />
		  <Projects
			projects={[
			  { title: "title", description: "description", image: "cat.jpg" },
			  { title: "title2", description: "description2" },
			  { title: "title", description: "description", image: "cat.jpg" },
			  { title: "title2", description: "description2" },
			  { title: "title", description: "description", image: "cat.jpg" },
			  { title: "title2", description: "description2" },
			  { title: "title", description: "description", image: "cat.jpg" },
			  { title: "title2", description: "description2" },
			  { title: "title", description: "description", image: "cat.jpg" },
			  { title: "title2", description: "description2" },
			  { title: "title", description: "description", image: "cat.jpg" },
			  { title: "title2", description: "description2" },
			  { title: "title", description: "description", image: "cat.jpg" },
			  { title: "title2", description: "description2" },
			  { title: "title", description: "description", image: "cat.jpg" },
			  { title: "title2", description: "description2" },
			  { title: "title", description: "description", image: "cat.jpg" },
			  { title: "title2", description: "description2" },
			  { title: "title", description: "description", image: "cat.jpg" },
			  { title: "title2", description: "description2" },
			  { title: "title", description: "description", image: "cat.jpg" },
			  { title: "title2", description: "description2" },
			  { title: "title", description: "description", image: "cat.jpg" },
			  { title: "title2", description: "description2" },
			  { title: "title", description: "description", image: "cat.jpg" },
			  { title: "title2", description: "description2" },
			  { title: "title", description: "description", image: "cat.jpg" },
			  { title: "title2", description: "description2" },
			  { title: "title", description: "description", image: "cat.jpg" },
			  { title: "title2", description: "description2" },
			  { title: "title", description: "description", image: "cat.jpg" },
			  { title: "title2", description: "description2" },
			  { title: "title", description: "description", image: "cat.jpg" },
			  { title: "title2", description: "description2" },
			  { title: "title", description: "description", image: "cat.jpg" },
			  { title: "title2", description: "description2" },
			  { title: "title", description: "description", image: "cat.jpg" },
			  { title: "title2", description: "description2" },
			  { title: "title", description: "description", image: "cat.jpg" },
			  { title: "title2", description: "description2" },
			]}
		  />
		  <Footer />
		</div>
	  }
	/>
  );
};

const about: string =
  "WLdzQHpeCPrKguzrNExSbppDJQbqzypunZWnJXdafrNLwkiCphauaatGnRyTxHACwrHJWDmTNHJDkBjvWyzEviLMiDDnvkZrizviRPUCnHBbhSQjZMqzaBRLvQpHTpKfNuFCTpaSPLJiuRkkmrhnmwQaAXiUtTcYjnzzcQRKQaZVnGDiuednCbYRVBpGAzDwkgUHGaBcrkmmTYJwCDCDLHPrWUTCefJeLKQuqGXRiPphaSzZNNenzSKcFxuFDnvnBzxQRbiwZHxcxAXQgePREkvadKwCmAvxMGNdhqdJEGUpiCiyEvpWWiiPqGbiibbFdBMzqqYZWcGUrqwFQXSNUfcSRKtzGtPFziGHBWmRyQeMUKyvzEUZgVMAtyyTPHFgTiGhDCzXnwLWrVkFmqwUUetThhevqhqTztgMYnZSBrUHSSZtVfEPJerbMGZqLbDEHhJvtifCHRgeQNnqnTCNipVYdGVhjCMbTUKdfNvXpJLmHtmkDaQh";

const links: any = [
  {
	url: "https://github.com/justincremer",
	image: "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg",
	alt: "",
  },
  {
	url: "https://github.com/justincremer",
	image: "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg",
	alt: "",
  },
];
