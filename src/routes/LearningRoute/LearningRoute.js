import React, { Component } from 'react'
import Word from '../../components/Word/Word'
import Feedback from '../../components/Feedback/Feedback';
import UserContext from '../../contexts/UserContext';

class LearningRoute extends Component {
  static contextType = UserContext;

  render() {
    const handleRender = () =>{
      if(!this.context.guess){
        return <Word />
      }
      return <Feedback />
    }
    return (
      <div>
        {handleRender()}
      </div>
    )
  }
}

export default LearningRoute
