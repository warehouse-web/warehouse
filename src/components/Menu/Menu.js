import React from "react";
import { bool } from "prop-types";
import { Link } from "gatsby";

const Menu = ({ cartQuantity, open, ...props }) => {
	const isHidden = open ? true : false;
	const tabIndex = isHidden ? 0 : -1;

	return (
		<div
			className={"Menu " + (open ? " is-active" : "")}
			aria-hidden={!isHidden}
		>
			<ul>
				<li>
					<Link to="/" tabIndex={tabIndex}>
						All
					</Link>
				</li>
				<li>
					<Link to="/events" tabIndex={tabIndex}>
						Events
					</Link>
				</li>
				<li>
					<Link to="/podcast" tabIndex={tabIndex}>
						Podcast
					</Link>
				</li>
				<li>
					<Link to="/focus" tabIndex={tabIndex}>
						Focus
					</Link>
				</li>
				<li>
					<Link to="/shop" tabIndex={tabIndex}>
						Shop
					</Link>
				</li>
				<li>
					<button className="btn btn--cart snipcart-checkout">
						Cart ({cartQuantity})
					</button>
				</li>
			</ul>
		</div>
	);
};

Menu.propTypes = {
	open: bool.isRequired
};

export default Menu;
