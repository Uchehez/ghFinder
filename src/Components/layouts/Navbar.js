import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import PropTypes from 'prop-types'





const Navbar = ({ title }) => {

  return (
    <nav className="navbar shades">

      <h1>
        <FontAwesomeIcon icon={faGithub} /> {title}
      </h1>

      <ul>
        <li>
          <Link to='/'>Home</Link>

        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )

}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
}

export default Navbar;
