import React from "react";
import "./style.css";
import { useState } from "react";

const Accordion = ({ heading, children, index }) => {
	const [expanded, setExpanded] = useState(false);

	function handleToggleCollapse() {
		const flag = !expanded;
		setExpanded(flag);
		if (flag) {
			const focusable = document.getElementById(`content-${index}`);
			focusable?.focus({ preventScroll: true });
		}
	}

	return (
		<>
			<div className="accordion">
				<button
					aria-expanded={expanded}
					onClick={handleToggleCollapse}
					className="heading"
					aria-controls={`content-${index}`}
					id={`heading-${index}`}
				>
					{heading}
					<span
						aria-hidden="true"
						data-expanded={expanded}
					>
						&gt;
					</span>
				</button>

				<div
					aria-hidden={!expanded}
					id={`content-${index}`}
					role="region"
					tabIndex={0}
					aria-labelledby={`heading-${index}`}
					className={`content ${expanded ? "expanded" : ""}`}
				>
					{children}
				</div>
			</div>
		</>
	);
};

export default Accordion;
