import { Route, BrowserRouter as Router } from "react-router-dom";
import { JustinCremer, UnderConstruction } from "./pages";

export const App: React.FC = (): JSX.Element => {
  return (
	<Router>
	  <Route path="/" exact component={UnderConstruction} />
	  <Route path="/justincremer" component={JustinCremer} />
	</Router>
  );
};
