import React from 'react'
import { Link } from 'gatsby'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand ">
            {/* <Link to="/about" className="right" title="Logo">
              WAREHOUSE
            </Link> */}
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/">
                All
              </Link>
              <Link className="navbar-item" to="/events">
                Events
              </Link>
              <Link className="navbar-item" to="/podcast">
                Podcast
              </Link>
              <Link className="navbar-item" to="/shop">
                Shop
              </Link>

            </div>
            <div className="navbar-end has-text-centered">
              <Link to="/about" className="right" title="Logo">
                WAREHOUSE
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
