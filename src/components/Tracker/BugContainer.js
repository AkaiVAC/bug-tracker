import React from "react";
import BugStack from "./BugStack";

const BugContainer = () => {
    return (
        <div className="bug_container">
            <p className="help_text">
                Drag between the stacks to change status.
            </p>
            <div className="bug_stacks">
                <BugStack />
                <BugStack />
                <BugStack />
                <BugStack />
                <BugStack />
            </div>
        </div>
    );
};

export default BugContainer;
