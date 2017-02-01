import React, { Component } from 'react';
import './App.css';

// the actual quiz
const questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const answers = ['un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix'];
function getCount() {
  return questions.length;
}
function getQuestion(i) {
  return <div>How do you say <span style={{color: 'red'}}>{questions[i - 1]}</span> en français?</div>;
}
function getAnswer(i) {
  return answers[i - 1];
}
// the actual quiz is done, boring stuff follows...

class App extends Component {
  constructor() {
    super();
    this.state = {
      question: getQuestion(1),
      answer: getAnswer(1),
      total: getCount(),
      i: 1,
    };
  }
  
  nextQuestion() {
    this.setState({
      question: getQuestion(this.state.i + 1),
      answer: getAnswer(this.state.i + 1),
      i: this.state.i + 1,
    });
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>flashcards</h1>
          <p>Quiz your knowledge</p>
        </div>
        <div className="App-body">
          {
            this.state.total 
              ? <Count i={this.state.i} total={this.state.total} />
              : null
          }
          <Flashcard 
            question={this.state.question}
            answer={this.state.answer}
          />
          {
            (this.state.total && this.state.i >= this.state.total)
              ? null
              : <button 
                  className="nextButton" 
                  onClick={this.nextQuestion.bind(this)}>
                  next...
                </button>
          }
        </div>
        <div className="App-footer">
          created with love
        </div>
      </div>
    );
  }
}

class Flashcard extends Component {

  constructor() {
    super();
    this.state = {
      reveal: false,
    };
  }


  componentWillReceiveProps() {
    this.setState({reveal: false});
  }

  flip() {
    this.setState({
      reveal: !this.state.reveal,
    });
  }

  render() {
    const className = "card flip-container" + (this.state.reveal ? ' flip' : '');
    return (
      <div><center>
        <div className={className}>
        	<div className="flipper">
        		<div className="front" style={{display: this.state.reveal ? 'none' : ''}}>
              {this.props.question}
        		</div>
        		<div className="back"  style={{display: this.state.reveal ? '' : 'none'}}>
              {this.props.answer}
        		</div>
        	</div>
        </div>
        <button className="answerButton" onClick={this.flip.bind(this)}>flip</button>
      </center></div>
    );
  }
}

const Count = ({i, total}) =>
  <div>
    Question {i} / {total}
  </div>;

export default App;
