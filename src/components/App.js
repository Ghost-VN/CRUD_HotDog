import React, { Component } from 'react'
import '../style/App.css'
import List from './List'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: '',
      items: []
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row" style={{background: "white", 
                                     fontFamily: "cursive",
                                     borderRadius: 30 + "px", 
                                     opacity: 0.95, 
                                     marginTop: 15 + "px",
                                     width: 950 + "px",
                                     marginLeft: 100 + "px"}}>
          <div className="col-md-6 mx-auto">
            <h1 className="text-center" style={{ marginBottom: 35 + "px"}}
                    >Create your own HotDog</h1>
            <List />
          </div>
        </div>
      </div>
    )
  }
}

export default App
