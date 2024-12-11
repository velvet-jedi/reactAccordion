import React from "react";
import "./style.css";
import { useState } from "react";

const Accordion = ({ heading, children }) => {
	const [expanded, setExpanded] = useState(false);

	function handleToggleCollapse() {
		setExpanded(!expanded);
		console.log(expanded);
	}

	return (
		<>
			<div
				onClick={handleToggleCollapse}
				className="accordion"
			>
				<div className="heading">{heading}</div>
				{expanded && <div className="content">{children}</div>}
			</div>
		</>
	);
};

export default Accordion;
