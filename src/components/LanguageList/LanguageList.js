import React, { Component } from 'react';
import ApiService from '../../services/api-services';
import UserContext from '../../contexts/UserContext';
import { Link } from 'react-router-dom'
import './LanguageList.css'

class LanguageList extends Component {
  state = { error : null }
  static contextType = UserContext

  componentDidMount(){
    ApiService.getLanguage()
    .then(data => 
      { this.context.setLang(data.language)
        this.context.setWords(data.words) })
  }

  wordList = () => {
    const words = this.context.words
    if(words){
      return words.map(word => 
      <li key={word.id}>
      <div className='word'>
      <h4>{ word.original }</h4>
      </div>
      <div className='correct'>
       correct answer count: { word.correct_count } 
      </div>
      <div className='incorrect'>
      incorrect answer count: { word.incorrect_count }
      </div>
      </li>
      
    )}
  }

  language=()=>{
     const lang = this.context.language
     if(lang){
     return <h2>{lang.name}</h2>
     }
  }

  total=()=>{
    if(this.context.language){
      return <section className="total">
        Total correct answers: {this.context.language.total_score}
      </section>
    }
  }

  handleButton=()=>{
    return <Link to='/learn'></Link>
  }


  render() {
    console.log(this.context.language)
    return ( 
      <div className='langContainer'>
        {this.language()}
        <h3>Words to practice</h3>
        <ul className='Word-List'>
          {this.wordList()}
        </ul>
        {this.total()}
        <Link to='/learn'><button className='start-practicing'>Start practicing</button></Link>
      </div>
     );
  }
}
 
export default LanguageList;