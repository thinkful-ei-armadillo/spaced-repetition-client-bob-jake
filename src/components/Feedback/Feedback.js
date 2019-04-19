import React, { Component } from 'react';
import UserContext from '../../contexts/UserContext';
import'./Feedback.css'

class Feedback extends Component {
  static contextType = UserContext
  state = {  }

  handlePageView = () => {
    const isCorrect = this.context.guess.isCorrect
    const curr = this.context
    if(isCorrect){
      return <><div className='DisplayScore'>
        <p>Your total score is: {curr.guess.totalScore}</p>
      </div>
        <h2>You were correct! :D</h2>
      <div className='DisplayFeedback'>
        <p>The correct translation for {curr.currentWord.nextWord} was {curr.guess.answer} and you chose {curr.userInput}!</p>
      </div>
      </>
    }
    return <><div className='DisplayScore'>
      <p>Your total score is: {curr.guess.totalScore}</p>
    </div>
      <h2>Good try, but not quite right :(</h2>
    <div className='DisplayFeedback'>
      <p>The correct translation for {curr.currentWord.nextWord} was {curr.guess.answer} and you chose {curr.userInput}!</p>
    </div>
    </>
  }

  handleButton = () => {
    this.context.setTotalScore(this.context.guess.totalScore)
    this.context.setNextWord(this.context.guess.nextWord)
    this.context.setGuess(null)
  }

  render() { 
    
    return ( 
    <div className='feedbackContainer'>
      {this.handlePageView()}
      <button onClick={this.handleButton}>Try another word!</button>
    </div>
     );
  }
}
 
export default Feedback;