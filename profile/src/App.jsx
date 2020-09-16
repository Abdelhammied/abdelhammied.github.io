import React, { Component } from 'react';
import axios from 'axios';

// Custom Components
import {
  Card,
  Contact,
  Experience,
  Skills,
  Info
} from "./components/core"

import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      user: {},
      pages: [
        { title: "Info", active: true },
        { title: "Skills", active: false },
        { title: "Experience", active: false },
        { title: "Contact", active: false }
      ],
      currentActivePageIndex: 0
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/Abdelhammied').then(
      response => {
        this.setState({
          user: response.data
        })
      }).catch(err => console.log(err));
  }

  handlePageWasClicked(pageIndex) {
    let pages = this.state.pages;

    pages.map((page, index) => {
      if (index !== pageIndex) {
        page.active = false
      } else {
        page.active = true
      }
    })

    this.setState({
      currentActivePageIndex: pageIndex,
      pages: pages
    })
  }

  render() {
    return (
      <div className="App mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Card
                user={this.state.user}
                pages={this.state.pages}
                pageWasClicked={(event) => { this.handlePageWasClicked(event) }} />
            </div>

            <div className="col-lg-8 col-md-6 col-sm-12">
              <Skills />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
