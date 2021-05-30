import { Portfolio } from "./pages";

export const App: React.FC = (): JSX.Element => {
  return (
    <Portfolio
      name="Justin Cremer"
      title="Software Engineer"
      image="cat.jpg"
      about={about}
      links={links}
      known={known}
      workingOn={workingOn}
      projects={projects}
    />
  );
};

const about: string = genRandString(500);

const links: Array<Object> = [
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

const known: Array<any> = [
  {
    name: "known 1",
    link: "https://github.com/justincremer",
  },
  {
    name: "known 2",
    link: null,
  },
  {
    name: "known 3",
    link: "https://github.com/justincremer",
  },
];

const workingOn: Array<any> = [
  {
    name: "workingOn 1",
    link: "https://github.com/justincremer",
  },
  {
    name: "workingOn 2",
    link: null,
  },
  {
    name: "workingOn 3",
    link: "https://github.com/justincremer",
  },
];

const projects: Array<object> = ((n: number): Array<object> => {
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push({
      title: "project " + (i + 1),
      description: genRandString(500),
      link: "https://github.com/justincremer",
    });
  }
  return res;
})(20);

function genRandString(length: number): string {
  const allowed: string =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let res: string = "";
  for (let i = 0; i < length; i++) {
    res += allowed[Math.floor(Math.random() * 53)];
  }
  return res;
}
