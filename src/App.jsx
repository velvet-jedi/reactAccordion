import Accordion from "./Accordion";
import "./App.css";
import { useState } from "react";

function App() {
	const accordionData = [
		{ heading: "Heading 1", content: "Content for accordion 1" },
		{ heading: "Heading 2", content: "Content for accordion 2" },
		{ heading: "Heading 3", content: "Content for accordion 3" },
		{ heading: "Heading 4", content: "Content for accordion 4" },
		{ heading: "Heading 5", content: "Content for accordion 5" },
	];

	const [expandedIndex, setExpandedIndex] = useState(null);
	const handleToggle = (index) => {
		// If clicking the already expanded accordion, close it
		// Otherwise, set the new index
		setExpandedIndex(expandedIndex === index ? null : index);
	};

	return (
		<>
			<div className="app-container">
				{accordionData.map((item, index) => (
					<Accordion
						key={index}
						heading={item.heading}
						index={index}
						expanded={expandedIndex === index}
						onToggle={() => handleToggle(index)}
					>
						{item.content}
					</Accordion>
				))}
			</div>
		</>
	);
}

export default App;
