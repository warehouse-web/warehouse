import React, { useState, useContext } from "react";
import { Link } from "gatsby";

import { Burger } from "_components";

import { SnipcartContext } from "gatsby-plugin-snipcart-advanced/context";

const Navbar = () => {
	const { state } = useContext(SnipcartContext);
	const { cartQuantity } = state;
	const [open, setOpen] = useState(false);

	return (
		<>
			<Link className="mobile-warehouse" to="/about">
				WAREHOUSE
			</Link>
			<Burger open={open} setOpen={setOpen} />

			<nav
				className={
					"MainBar is-transparent" + (open ? " is-active" : "")
				}
				role="navigation"
				aria-label="main-navigation"
			>
				<div id="navMenu" className={`MainBar__menu`}>
					<ul className="Navbar">
						<li className="Navbar__item">
							<Link
								activeClassName="active"
								to="/"
								className="btn"
							>
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
		</>
	);
};

export default Navbar;
