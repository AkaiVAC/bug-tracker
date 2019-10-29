import React from "react";
import { render } from "react-dom";

import Header from "./components/Header";
import BugContainer from "./components/Tracker/BugContainer";

const Index = () => {
	return (
		<>
			<Header />
			<BugContainer />
		</>
	);
};

render(<Index />, document.querySelector("#app"));
