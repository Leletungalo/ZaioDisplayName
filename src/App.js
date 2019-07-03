import React,{Component} from 'react';
import './App.css';

class App extends Component {
  state ={
    Email: ""
  }

  onChange = (e) => {
    this.setState({
      Email: e.target.value
    });
  }

  render(){
    return (
      <div className="App">
        <header className="header">
          <h1>Display My Name</h1>
        </header>
        <form className="myform">
          <input
          className="myinput"
          placeholder="Email"
          value={this.state.Email}
          onChange={this.onChange}
          ></input>
        </form>
        <h1 className="myname">{this.state.Email}</h1>
      </div>
    );
  }
}

export default App;
