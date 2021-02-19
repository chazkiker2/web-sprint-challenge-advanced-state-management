import React from "react";
import styled from "styled-components";

const Pane = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
	margin: 2rem auto;
	width: 90%;
	div.Split-Left {
		width: 30%;
	}
	div.Split-Right {
		width: 70%;
	}
`;

const SplitPane = (props) => {
	return (
		<Pane>
			<div className="Split-Left">
				{props.left}
			</div>
			<div className="Split-Right">
				{props.right}
			</div>
		</Pane>
	)
}

export default SplitPane;