import React from "react";
import "./style.css";

const Accordion = ({ heading, children }) => {
	return (
		<>
			<div className="accordion">
				<div className="heading">{heading}</div>
				<div className="content">{children}</div>
			</div>
		</>
	);
};

export default Accordion;
