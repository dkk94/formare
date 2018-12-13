import React, { Component, Fragment } from 'react';
import { GlobalHeader, GlobalContent } from '../Global';
import './Global.scss';

class Global extends Component {
  render() {
    return (
      <div className="fr-global">
        <GlobalHeader />
        <GlobalContent />
      </div>
    );
  }
}

export default Global;