import React from 'react';
import { Link } from 'react-router-dom'

class Navigation extends React.Component {
  render() {
    return(
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">CRAP@Carleton</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/browse">Browse</Link></li>
                <li><Link to="/saved">Saved</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Navigation;