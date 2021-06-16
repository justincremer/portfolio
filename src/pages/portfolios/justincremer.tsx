import { Portfolio } from "../../components";
import type { Config } from "../../components";
import { PageWrapper } from "../../wrappers";

import { AiOutlineMail as Email } from "react-icons/ai";
import {
  FaLinkedin as LinkedIn,
  FaGithubSquare as Github,
} from "react-icons/fa";

export const JustinCremer: React.FC = (): JSX.Element => {
  const iconSize: number = 35;
  const config: Config = {
	name: "Justin Cremer",
	title: "Software Engineer",
	location: "San Diego, CA",
	image: "profile.jpg",
	about:
	  "I am currently seeking opportunities to work collaboratively and expand my expertise in application architecture and web development. Skilled in defensive security and linux system administration, I have studied cyber security at UCSD, building a cohesive set of mitigation strategies for any system.  While proficient in a variety of languages and frameworks, I remain agnostic in my ability to deliver robust applications and services.",
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
		title: "Chimkin Bot",
		url: "https://github.com/justincremer/chimkin-bot",
		description:
		  "A server specific Discord bot utilizing the DiscordGo module.  In it's current rendition, Chimking Bot can perform a series of primitive read/write operations, though I am currently working on two features introducing the use of an external database.  One of these features is a (fake) currency system, which supplies members with a small sum of currency regularly on a timer.  This can be used to gamble, pay out other members, and to buy special prizes from Chimkin Bot.  The other feature is a smart repository for coordinates on our minecraft server.  This seeminly simple task has proved to be more complex, in that locations can result in both geographic and namespace collisions.  I've written a few simple algorithms for checking such issues and am working on a custom namespacing feature.",
	  },
	  {
		title: "Lisp Interpreter",
		url: "https://github.com/justincremer/lisp-interpreter",
		description: "add description",
	  },
	  {
		title: "Lexical Parser",
		url: "https://github.com/justincremer/lexical-parser",
		description: "add description",
	  },
	  {
		title: "Book Store",
		url: "https://github.com/justincremer/book-store",
		description: "add description",
	  },
	  {
		title: "Key Value Store",
		url: "https://github.com/justincremer/kvs",
		description: "add description",
	  },
	  {
		title: "Space",
		url: "https://github.com/aaronTheZinc/Space",
		description: "add description",
	  },

	  {
		title: "Orm Practice",
		url: "https://github.com/justincremer/go-orm",
		description:
		  "An http api written in Go.  This was my first attempt to interact with a Postgres server using an ORM in Go and it worked quite nicely.  Native go structs allow for encoding decorators, for easy encoding and decoding of data.  This hyper minimal api utilizes such decorators to painlessly build out endpoints.",
	  },
	  {
		title: "Graveyard",
		url: "https://github.com/justincremer/graveyard",
		description:
		  "A monolithic collection of past projects and practice code i've written over the years.  The majority of these are written in C and non-idiomatic C++, but I push any and all abandoned projects, backups, and small programs I write when learning languages, into this repository.  Promptly named Graveyard, this is where I retire dead code before I scrub it from my filesystem.",
	  },
	],
	maxProjectDescriptionLength: 500,
  };

  return (
	<div className=" 2xl:ml-60 2xl:mr-60">
	  <PageWrapper children={<Portfolio config={config} />} />
	</div>
  );
};
