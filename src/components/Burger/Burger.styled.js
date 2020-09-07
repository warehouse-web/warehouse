import styled from "styled-components";

export const StyledBurger = styled.div`
	color: white;
	mix-blend-mode: difference;
	cursor: pointer;
	display: block;
	height: 3.25rem;
	position: relative;
	width: 3.25rem;
	margin-left: auto;
	z-index: 10;

	:focus {
		outline: 0;
	}
	span {
		background-color: currentColor;
		display: block;
		height: 1px;
		left: calc(50% - 8px);
		position: absolute;
		-webkit-transform-origin: center;
		transform-origin: center;
		-webkit-transition-duration: 86ms;
		transition-duration: 86ms;
		-webkit-transition-property: background-color, opacity,
			-webkit-transform;
		transition-property: background-color, opacity, -webkit-transform;
		transition-property: background-color, opacity, transform;
		transition-property: background-color, opacity, transform,
			-webkit-transform;
		-webkit-transition-timing-function: ease-out;
		transition-timing-function: ease-out;
		width: 16px;

		:first-child {
			top: calc(50% - 6px);
			transform: ${({ open }) =>
				open ? "translateY(5px) rotate(45deg)" : ""};
		}
		:nth-child(2) {
			top: calc(50% - 1px);
			opacity: ${({ open }) => (open ? "0" : "1")};
			transform: ${({ open }) =>
				open ? "translateX(20px)" : "translateX(0)"};
		}
		:nth-child(3) {
			top: calc(50% + 4px);
			transform: ${({ open }) =>
				open ? "translateY(-5px) rotate(-45deg)" : ""};
		}
	}
`;
