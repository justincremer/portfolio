import { Route, BrowserRouter as Router } from "react-router-dom";
import { JustinCremer } from "./pages";

export const App: React.FC = (): JSX.Element => {
  return (
	<Router>
	  <Route path="/" />
	  <Route path="/justincremer" component={JustinCremer} />
	</Router>
  );
};
