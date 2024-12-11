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
			<div className="accordion">
				<button
					aria-expanded={expanded}
					onClick={handleToggleCollapse}
					className="heading"
				>
					{heading}
				</button>
				<div
					aria-hidden={!expanded}
					className={`content ${expanded ? "expanded" : ""}`}
				>
					{children}
				</div>
			</div>
		</>
	);
};

export default Accordion;
