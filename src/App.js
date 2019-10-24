import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import OnClickHandler from './onClickHandler'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      todos: [],
      isClicked: false
    };
  }

onChange = e => {
    this.setState({
      text: e.target.value
    })
  }

formSubmit = e => {
  e.preventDefault()
  //console.log ("THIS IS STATE", this.state.todos)
  this.setState ({
        todos: [...this.state.todos, this.state.text],
        text: ''
  })
}  
    

    render() {
      return (
        <div className="App">

            <header className = "App-header">
              <img src= {logo} className="App-logo" alt="logo"/> 

              <form onSubmit= {this.formSubmit}>
              <input value={this.state.text} onChange={this.onChange}/>
              <button>Submit</button>
              </form>
             
             <OnClickHandler todos = {this.state.todos}/>

            </header>

        </div>
      );
    
  }
}
export default App;

 

