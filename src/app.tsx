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

const about: string = genRandString(500);

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

const projects = (function (n: number) {
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push({
      title: "title" + (i + 1),
      description: genRandString(500),
    });
  }
  return res;
})(15);
/* [
 *   { title: "title", description: genRandString(500), image: "cat.jpg" },
 *   { title: "title2", description: genRandString(500) },
 *   { title: "title3", description: genRandString(500) },
 * ]; */

function genRandString(length: number): string {
  let res: string = "";
  const allowed: string =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < length; i++) {
    res += allowed[Math.floor(Math.random() * 53)];
  }
  return res;
}
