import { Portfolio } from "./pages";
import type { Config } from "./pages";
import { PageWrapper } from "./wrappers";

import { AiOutlineMail as Email } from "react-icons/ai";
import {
  FaLinkedin as LinkedIn,
  FaGithubSquare as Github,
} from "react-icons/fa";

import { genRandString } from "./utils";

export const App: React.FC = (): JSX.Element => {
  const iconSize: number = 35;
  const config: Config = {
    name: "Justin Cremer",
    title: "Software Engineer",
    location: "San Diego, CA",
    image: "cat.jpg",
    about: genRandString(500),
    links: [
      {
        url: "https://www.linkedin.com/in/justin-cremer-97870a1b0/",
        icon: <LinkedIn size={iconSize} />,
      },
      {
        url: "https://github.com/justincremer",
        icon: <Github size={iconSize} />,
      },
      {
        url: "mailto:jacremer@live.com",
        icon: <Email size={iconSize} />,
      },
    ],
    experience: {
      known: [
        { name: "Typescript", link: "https://www.typescriptlang.org/" },
        { name: "Node", link: "https://nodejs.org/en/about/" },
        { name: "Express", link: "https://expressjs.com/" },
        { name: "React", link: "https://reactjs.org/" },
        { name: "Tailwind", link: "https://tailwindcss.com/" },
        { name: "Dart", link: "https://dart.dev/" },
        { name: "Flutter", link: "https://flutter.dev/" },
        { name: "Golang", link: "https://golang.org/" },
        { name: "Python", link: "https://www.python.org/" },
        // { name: "Python" },
        { name: "Docker", link: "https://www.docker.com/" },
        { name: "GNU/Linux", link: "https://www.gnu.org/" },
        {
          name: "ELisp",
          link: "https://www.emacswiki.org/emacs/LearnEmacsLisp",
        },
      ],
      workingOn: [
        { name: "Haskell", link: "https://www.haskell.org/" },
        { name: "Rust", link: "https://www.rust-lang.org/" },
        { name: "Kubernetes", link: "https://kubernetes.io/" },
      ],
    },
    projects: [
      {
        title: "Pron",
        url: "https://github.com/justincremer/pron",
        description:
          "An extensible personal cron tab, supporting the arbitrary execution of external programs, as well as hand rolled internal methods.  Pron runs as a sys daemon under linux and macOS, including utilities for logging and monitoring process status information.",
      },
    ].concat(
      ((n): any => {
        let res: Array<any> = [];
        for (let i: number = 0; i < n; i++) {
          res.push({
            title: `Project ${i + 1}`,
            description: genRandString(500),
            url: "https://github.com/justincremer",
          });
        }
        return res;
      })(10)
    ),
    maxProjectDescriptionLength: 300,
  };

  return (
    <div>
      <PageWrapper children={<Portfolio config={config} />} />
    </div>
  );
};
