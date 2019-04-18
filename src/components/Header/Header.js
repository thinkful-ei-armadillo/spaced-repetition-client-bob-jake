import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import UserContext from '../../contexts/UserContext';
import './Header.css';

class Header extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    return (
      <div>
        <nav>
          <span id="welcomeUser">Welcome, {this.context.user.name}</span>
          <Link onClick={this.handleLogoutClick} to="/login">
            Logout
          </Link>
        </nav>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <nav>
        <Link to="/login">Login</Link>
        <span />
        <Link to="/register">Sign up</Link>
      </nav>
    );
  }

  render() {
    return (
      <header>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}

        <h2 className="viva">
          <Link to="/">¡Viva Mexico!</Link>
        </h2>
        <h1 className="logo">Spaced repetition</h1>
      </header>
    );
  }
}

export default Header;
