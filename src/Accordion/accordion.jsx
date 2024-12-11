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
					onClick={handleToggleCollapse}
					className="heading"
				>
					{heading}													
				</button>
				<div className={`content ${expanded ? "expanded" : ""}`}>
					{children}
				</div>
			</div>
		</>
	);
};

export default Accordion;
