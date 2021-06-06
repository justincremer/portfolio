import { Portfolio } from "./pages";
import type { Config } from "./pages";
import { PageWrapper } from "./wrappers";

import { AiOutlineMail as Email } from "react-icons/ai";
import {
  FaLinkedin as LinkedIn,
  FaGithubSquare as Github,
} from "react-icons/fa";

import { genRandString } from "./utils";

// TODO: if project description length is greater than 500 characters, cut it off and add ... and a read more button.
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
        { name: "Python", link: "https://www.python.org/" },
        { name: "Golang", link: "https://golang.org/" },
<<<<<<< Updated upstream
        { name: "Python", link: "https://www.python.org/" },
        // { name: "Python" },
=======
>>>>>>> Stashed changes
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
          "An extensible personal cron tab, supporting the arbitrary execution of external programs, as well as hand rolled internal programs, configured in a mannor similar to suckless utilities.  Pron runs as a sys daemon under linux and macOS, including utilities for logging and monitoring process status information.",
      },
      {
        title: "Sudoku Solver",
        url: "https://github.com/justincremer/sudoku-solver",
        description: "",
      },
      {
        title: "Lisp Interpreter",
        url: "https://github.com/justincremer/lisp-interpreter",
        description: "",
      },
      {
        title: "Key Value Store",
        url: "https://github.com/justincremer/kvs",
        description: "",
      },
      {
        title: "Graveyard",
        url: "https://github.com/justincremer/graveyard",
        description: "",
      },
      {
        title: "Book Store",
        url: "https://github.com/justincremer/book-store",
        description: "",
      },
      {
        title: "Space",
        url: "https://github.com/aaronTheZinc/Space",
        description: "",
      },
      {
        title: "Lexical Parser",
        url: "https://github.com/justincremer/lexical-parser",
        description: "",
      },
      {
        title: "Go Rest/Orm Practice",
        url: "https://github.com/justincremer/go-orm",
        description: "",
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
      })(3)
    ),
    maxProjectDescriptionLength: 300,
  };

  return (
    <div>
      <PageWrapper children={<Portfolio config={config} />} />
    </div>
  );
};
