import { Portfolio } from "./pages";
import type { Config } from "./pages";
import { genRandString } from "./utils";

export const App: React.FC = (): JSX.Element => {
  return <Portfolio config={config} />;
};

const config: Config = {
  name: "Justin Cremer",
  title: "Software Engineer",
  image: "cat.jpg",
  about: genRandString(500),
  links: [
    {
      url: "https://github.com/justincremer",
      image: "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg",
      alt: "",
    },
    {
      url: "jacremer@live.com",
      image: "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/gmail.svg",
      alt: "",
    },
    {
      url: "https://github.com/justincremer",
      image: "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg",
      alt: "",
    },
    {
      url: "jacremer@live.com",
      image: "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/gmail.svg",
      alt: "",
    },
  ],
  techs: {
    known: [
      {
        name: "Typescript",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "Dart",
        link: "https://dart.dev/",
      },
      {
        name: "Golang",
        link: "https://golang.org/",
      },
    ],
    workingOn: [
      {
        name: "Haskell",
        link: "https://www.haskell.org/",
      },
      {
        name: "Rust",
        link: "https://www.rust-lang.org/",
      },
    ],
  },
  projects: ((n): any => {
    let res: Array<any> = [];
    for (let i: number = 0; i < n; i++) {
      res.push({
        title: `Project ${i + 1}`,
        description: genRandString(500),
        url: "https://github.com/justincremer",
      });
    }
    return res;
  })(10),
};
