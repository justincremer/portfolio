import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { JustinCremer, UnderConstruction, NotFound } from "./pages";

export const App: React.FC = (): JSX.Element => {
	return (
		<Router>
		<Switch>
			<Route exact path="/" component={UnderConstruction} />
			<Route path="/justincremer" component={JustinCremer} />
			<Route path="*" component={NotFound} />
		</Switch>
		</Router>
	);
}
	
  

