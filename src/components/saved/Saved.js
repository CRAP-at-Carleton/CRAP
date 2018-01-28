import React from 'react';
import HeaderBar from '../homepage/HeaderBar';

// import Globalize from 'globalize';
// import globalizeLocalizer from 'react-widgets-globalize';
import { Calendar } from 'react-widgets';

// Globalize.locale('en');
// globalizeLocalizer();

let widget = (
  <Calendar
    dateFormat={dt => String(dt.getDate())}
  />
);

class Saved extends React.Component {
  render() {
    return (
      <div>
        <HeaderBar />
        <widget/>
      </div>
    );
  }
}

export default Saved;