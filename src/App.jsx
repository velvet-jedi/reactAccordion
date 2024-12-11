import Accordion from "./Accordion";
import "./App.css";

function App() {
	const accordionData = [
		{ heading: "Heading 1", content: "Content for accordion 1" },
		{ heading: "Heading 2", content: "Content for accordion 2" },
		{ heading: "Heading 3", content: "Content for accordion 3" },
		{ heading: "Heading 4", content: "Content for accordion 4" },
		{ heading: "Heading 5", content: "Content for accordion 5" },
	];

	return (
		<>
			<div className="app-container">
				{accordionData.map((item, index) => (
					<Accordion
						key={index}
						heading={item.heading}
						index={index}
					>
						{item.content}
					</Accordion>
				))}
			</div>
		</>
	);
}

export default App;
