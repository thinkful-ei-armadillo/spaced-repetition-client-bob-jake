import React, { Component } from 'react'
import LanguageList from '../../components/LanguageList/LanguageList';

class DashboardRoute extends Component {
  render() {
    return (
      <section>
        <LanguageList />
      </section>
    );
  }
}

export default DashboardRoute
