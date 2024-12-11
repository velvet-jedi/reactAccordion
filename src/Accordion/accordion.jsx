import React from "react";
import "./style.css";
import { useState, useRef, useEffect } from "react";

const Accordion = ({ heading, children, index, expanded, onToggle }) => {
	const contentRef = useRef(null);

	useEffect(() => {
		if (expanded && contentRef.current) {
			contentRef.current.focus();
		}
	}, [expanded]);

	return (
		<>
			<div className="accordion">
				<button
					aria-expanded={expanded}
					onClick={onToggle}
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
					ref={contentRef}
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
