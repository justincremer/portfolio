import { Portfolio } from "./pages";
import type { Config } from "./pages";

export const App: React.FC = (): JSX.Element => {
  return <Portfolio config={config} />;
};

const config: Config = {
  name: "Justin Cremer",
  title: "Software Engineer",
  image: "cat.jpg",
  about: "Insert About here",
  links: [
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
  ],
  techs: {
    known: [
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
    ],
    workingOn: [
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
    ],
  },
  projects: ((n: number): Array<any> => {
    let res = [];
    for (let i = 0; i < n; i++) {
      res.push({
        title: "project " + (i + 1),
        description: genRandString(500),
        link: "https://github.com/justincremer",
      });
    }
    return res;
  })(10),
};

/* const about: string = genRandString(500);
 *
 * const links: any = [
 *   {
 *     url: "https://github.com/justincremer",
 *     image: "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg",
 *     alt: "",
 *   },
 *   {
 *     url: "https://github.com/justincremer",
 *     image: "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg",
 *     alt: "",
 *   },
 * ];
 *
 * const known: Array<any> = [
 *   {
 *     name: "known 1",
 *     link: "https://github.com/justincremer",
 *   },
 *   {
 *     name: "known 2",
 *     link: null,
 *   },
 *   {
 *     name: "known 3",
 *     link: "https://github.com/justincremer",
 *   },
 * ];
 *
 * const workingOn: Array<any> = [
 *   {
 *     name: "workingOn 1",
 *     link: "https://github.com/justincremer",
 *   },
 *   {
 *     name: "workingOn 2",
 *     link: null,
 *   },
 *   {
 *     name: "workingOn 3",
 *     link: "https://github.com/justincremer",
 *   },
 * ];
 *
 * const projects: Array<object> = ((n: number): Array<object> => {
 *   let res = [];
 *   for (let i = 0; i < n; i++) {
 *     res.push({
 *       title: "project " + (i + 1),
 *       description: genRandString(500),
 *       link: "https://github.com/justincremer",
 *     });
 *   }
 *   return res;
 * })(20);
 */

function genRandString(length: number): string {
  const allowed: string =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let res: string = "";
  for (let i = 0; i < length; i++) {
    res += allowed[Math.floor(Math.random() * 53)];
  }
  return res;
}
