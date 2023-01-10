import React from "react";

//create your first component
const SecondsCounter = (props) => {
	return (
		<>
			<h1>Contador: {props.numero6}{props.numero5}{props.numero4}{props.numero3}{props.numero2}{props.numero1}</h1>
		</>
	);
};

export default SecondsCounter;
