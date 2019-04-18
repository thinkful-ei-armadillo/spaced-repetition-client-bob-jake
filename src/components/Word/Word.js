import React, { Component } from 'react';
import UserContext from '../../contexts/UserContext'
import ApiService from '../../services/api-services'

class Word extends Component {
  static contextType = UserContext
  componentDidMount() {
    ApiService.getWord()
      .then(res => {
        console.log(res)
        this.context.setCurrent(res)
      })
  }


  handleSubmit = (e) => {
    e.preventDefault()
    this.context.setUserInput(e.target.guess.value)
    ApiService.postGuess(e.target.guess.value)
    .then(res => 
      this.context.setGuess(res))
  }


  render() {
    const correctCount = (this.context.currentWord) ? this.context.currentWord.wordCorrectCount : '-1';
    const incorrectCount = (this.context.currentWord) ? this.context.currentWord.wordIncorrectCount : '-1';

    return (
      <section>
        <h2>
          Translate the word:
        </h2>
        
        <span>
          {(this.context.nextWord) ?
            this.context.nextWord : (this.context.currentWord) ?
            this.context.currentWord.nextWord :
            'loading'
            }
        </span>
        <main>
          <form className='main-form' name='main-form' onSubmit={e => this.handleSubmit(e)}>
            <label htmlFor='learn-guess-input'>What's the translation for this word?</label>
            <input id='learn-guess-input' name='guess' type='text' required></input>
            <button type='submit'>Submit your answer</button>
          </form>


          <p>
            Your total score is: {
              (this.context.totalScore) ? 
              this.context.totalScore : 
              (this.context.currentWord) ? 
              this.context.currentWord.totalScore : 
              'loading'}
          </p>
          <p>You have answered this word correctly {correctCount} times.</p>
          <p>You have answered this word incorrectly {incorrectCount} times.</p>

        </main>
      </section>
    );
  }
}
 
export default Word;