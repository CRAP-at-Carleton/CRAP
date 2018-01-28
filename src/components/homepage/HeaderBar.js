import React from 'react'
import './HeaderBar.css'
import NavTabs from "./NavTabs";

class HeaderBar extends React.Component {
  render() {
    return (
      <div className="header">
        <NavTabs/>
      </div>
    )
  }
}

export default HeaderBar;
