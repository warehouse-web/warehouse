import React from "react";
import { Link } from "gatsby";

const Navbar = ({ cartQuantity = 0 }) => {
	return (
		<nav
			className="navbar is-transparent"
			role="navigation"
			aria-label="main-navigation"
		>
			<div id="navMenu" className={`navbar-menu`}>
				<div className="navbar-start has-text-centered">
					<Link
						activeClassName="active"
						className="navbar-item"
						to="/"
					>
						All
					</Link>
					<Link
						activeClassName="active"
						partiallyActive={true}
						className="navbar-item"
						to="/events"
					>
						Events
					</Link>
					<Link
						activeClassName="active"
						partiallyActive={true}
						className="navbar-item"
						to="/focus"
					>
						Focus
					</Link>
					<Link
						activeClassName="active"
						partiallyActive={true}
						className="navbar-item"
						to="/podcast"
					>
						Podcast
					</Link>
					<Link
						activeClassName="active"
						partiallyActive={true}
						className="navbar-item"
						to="/shop"
					>
						Shop
					</Link>
					<div className="navbar-item">
						<button className="btn snipcart-checkout">
							Cart ({cartQuantity})
						</button>
					</div>
				</div>
				<div className="navbar-end has-text-centered">
					<Link
						className="navbar-item right"
						title="Logo"
						to="/about"
					>
						WAREHOUSE
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
