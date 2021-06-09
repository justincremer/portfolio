import { Portfolio } from "./portfolio";
import type { Config } from "./portfolio";
import { PageWrapper } from "../../wrappers";

import { AiOutlineMail as Email } from "react-icons/ai";
import {
  FaLinkedin as LinkedIn,
  FaGithubSquare as Github,
} from "react-icons/fa";

import { genRandString } from "../../utils";

export const JustinCremer: React.FC = (): JSX.Element => {
  const iconSize: number = 35;
  const config: Config = {
	name: "Justin Cremer",
	title: "Software Engineer",
	location: "San Diego, CA",
	image: "profile.jpg",
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
		description:
		  "Solves sudoku boards in a highly concurrent environment, using a tail recursive backtracking algorithm.  Unsolved boards are pulled from Utep's public api and encoded from json into a native go struct.  Pure functions exist for checking the occurance of a number withing a given row, column, and block.  For each cell of the board, if a given cell is unsolved, the sequential numbers (i.e. 1..9 for a 9x9 board) are tested against these three algorithms.  If the number does not exist within the bounds, it is placed in the given cell and the next cell is tested.  If an error occurs, the program backtracks to the previous tested cell, continuing along the list of potential numbers (ex. 5..9 if 4 was the previous number).  This is continued until all cells on the board are solved for.  It is not the fastest algorithm; nonetheless, it is significantlly faster than brute forcing - solving most hard 9x9 puzzles in milliseconds.  The solves are additionally written to run in individual goroutines, writing solve data concurrently over io channels.  This allows the program to solve hundreds of boards concurrently, in just seconds, limited only by the api's rate limiter.  I plan on writing my own board generator to allow for higher throughput of unsolved boards.  This will allow me to really throttle my program and do serious benchmarking.",
	  },
	  {
		title: "Lisp Interpreter",
		url: "https://github.com/justincremer/lisp-interpreter",
		description: genRandString(500),
	  },
	  {
		title: "Key Value Store",
		url: "https://github.com/justincremer/kvs",
		description: genRandString(500),
	  },
	  {
		title: "Graveyard",
		url: "https://github.com/justincremer/graveyard",
		description:
		  "A monolithic collection of past projects and practice code i've written over the years.  The majority of these are written in C and non-idiomatic C++, but I push any and all insignificant abandoned projects, backups, and small programs I write when learning languages, into this repository.  Promptly named Graveyard, this is where I retire dead code before I scrub it from filesystem.",
	  },
	  {
		title: "Book Store",
		url: "https://github.com/justincremer/book-store",
		description: genRandString(500),
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
			description: genRandString(1000),
			url: "https://github.com/justincremer",
		  });
		}
		return res;
	  })(0)
	),
	maxProjectDescriptionLength: 500,
  };

  return (
	<div>
	  <PageWrapper children={<Portfolio config={config} />} />
	</div>
  );
};
