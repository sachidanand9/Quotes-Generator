import axios from 'axios';
import React from 'react'
import './style.css'

class App extends React.Component {

  state = { advice: '' };

  componentDidMount() {
    // console.log('COMPONENT DID MOUNT');
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')

      .then((response) => {
        // destructuring
        const{advice}= response.data.slip;
        // console.log(advice);

        this.setState({ advice});
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
  const {advice} = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1 className='heading'>{ advice}</h1>
          <button className = "button" onClick={this.fetchAdvice}>
            <span>Generate Quotes</span>
          </button>
        </div>
      </div>
    )

  }
}

export default App