import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link } from 'gatsby';

const Menu = ({ open, ...props }) => {

  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Link to="/" tabIndex={tabIndex}>
        All
      </Link>
      <Link to="/events" tabIndex={tabIndex}>
        Events
        </Link>
      <Link to="/podcast" tabIndex={tabIndex}>
        Podcast
      </Link>
      <Link to="/focus" tabIndex={tabIndex}>
        Focus
      </Link>
      <Link to="/shop" tabIndex={tabIndex}>
        Shop
      </Link>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;