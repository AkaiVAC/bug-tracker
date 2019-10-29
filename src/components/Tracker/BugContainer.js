import React from "react";
import BugStack from "./BugStack";

const BugContainer = () => {
	return (
		<div className='bug_container'>
			<BugStack />
			<BugStack />
			<BugStack />
			<BugStack />
			<BugStack />
		</div>
	);
};

export default BugContainer;
