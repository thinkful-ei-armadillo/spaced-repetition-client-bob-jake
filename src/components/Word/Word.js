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
  render() {
    const correctCount = (this.context.currentWord) ? this.context.currentWord.wordCorrectCount : '-1';
    const incorrectCount = (this.context.currentWord) ? this.context.currentWord.wordIncorrectCount : '-1';

    console.log(this.context.currentWord)
    return (
      <section>
        <h2>
          Translate the word:
        </h2>
        
        <span>
          {(this.context.currentWord) ?
            this.context.currentWord.nextWord :
            'loading'}
        </span>
        <main>
          <form className='main-form' name='main-form'>
            <label htmlFor='learn-guess-input'>What's the translation for this word?</label>
            <input id='learn-guess-input' type='text' required></input>
            <button type='submit'>Submit your answer</button>
          </form>


          <p>
            Your total score is: {(this.context.currentWord) ? this.context.currentWord.totalScore : null}
          </p>
          <p>You have answered this word correctly {correctCount} times.</p>
          <p>You have answered this word incorrectly {incorrectCount} times.</p>

        </main>
      </section>
    );
  }
}
 
export default Word;