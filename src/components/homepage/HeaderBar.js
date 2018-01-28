import React from 'react'
import './HeaderBar.css'
import NavTabs from "./NavTabs";

class HeaderBar extends React.Component {
  render() {
    return (
      <div className="header">
        <h1><a href='/'>CRAP@Carleton</a></h1>
        <h2>"Course Registration and Planning"</h2>
        <NavTabs/>
      </div>
    )
  }
}

export default HeaderBar;
