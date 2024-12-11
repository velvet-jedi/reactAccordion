import React from "react";
import "./style.css";
import { useState } from "react";

const Accordion = ({ heading, children }) => {
	const [expanded, setExpanded] = useState(false);

	function handleToggleCollapse() {
		const flag = !expanded;
		setExpanded(flag);
		if (flag) {
			const focusable = document.getElementById("content-1");
			focusable.focus({ preventScroll: true });
		}
	}

	return (
		<>
			<div className="accordion">
				<button
					aria-expanded={expanded}
					onClick={handleToggleCollapse}
					className="heading"
					aria-controls="content-1"
					id="heading-1"
				>
					{heading}
					<span aria-hidden="true" data-expanded={expanded}>&gt;</span>
				</button>

				<div
					aria-hidden={!expanded}
					id="content-1"
					role="region"
					tabIndex={0}
					aria-labelledby="heading-1"
					className={`content ${expanded ? "expanded" : ""}`}
				>
					{children}
				</div>
			</div>
		</>
	);
};

export default Accordion;
