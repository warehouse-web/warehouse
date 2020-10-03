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
				<ul className="Navbar">
					<li className="Navbar__item">
						<Link activeClassName="active" to="/" className="btn">
							All
						</Link>
					</li>
					<li className="Navbar__item">
						<Link
							activeClassName="active"
							partiallyActive={true}
							to="/events"
							className="btn"
						>
							Events
						</Link>
					</li>
					<li className="Navbar__item">
						<Link
							activeClassName="active"
							partiallyActive={true}
							to="/focus"
							className="btn"
						>
							Focus
						</Link>
					</li>
					<li className="Navbar__item">
						<Link
							activeClassName="active"
							partiallyActive={true}
							to="/podcast"
							className="btn"
						>
							Podcast
						</Link>
					</li>
					<li className="Navbar__item">
						<Link
							activeClassName="active"
							partiallyActive={true}
							to="/shop"
							className="btn"
						>
							Shop
						</Link>
					</li>
					<li className="Navbar__item">
						<button className="btn btn--cart snipcart-checkout">
							Cart ({cartQuantity})
						</button>
					</li>
				</ul>

				<ul className="Navbar Navbar--right">
					<li className="Navbar__item">
						<Link className="btn" title="Logo" to="/about">
							WAREHOUSE
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
