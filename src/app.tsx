import { Portfolio } from "./pages";

export const App: React.FC = (): JSX.Element => {
  return (
    <Portfolio
      name="Justin Cremer"
      title="Software Engineer"
      image="cat.jpg"
      about={about}
      links={links}
      projects={projects}
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

const projects: any = [
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
];
