// rcc
import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';

// CLASS
// Class Component Template
class Main extends Component {

  // Ekranda görünen
  static displayName="Blog Footer"

  // CONSTRUCTOR
  constructor(props) {
    super(props);

    // STATE
    this.state={}

    // BIND
  }

  // CDM

  // RENDER
  render() {

    // RETURN
    return (
      <React.Fragment>
        Footer 44
      </React.Fragment>
    ) //end return
  } // // end render
} //end class

export default withTranslation()(Main);
