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
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h1 className="text-center">Create your own HotDog</h1>
            <List />
          </div>
        </div>
      </div>
    )
  }
}

export default App
