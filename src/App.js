import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

export default class App extends Component {

  // name = "datta";
  pageSize = 3;

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<News key={"world"} pageSize={this.pageSize} topic='world' />} />
            <Route exact path='/india' element={<News key={"india"} pageSize={this.pageSize} topic='india' />} />
            <Route exact path='/us' element={<News key={"us"} pageSize={this.pageSize} topic='us' />} />
            <Route exact path='/business' element={<News key={"business"} pageSize={this.pageSize} topic='business' />} />
            <Route exact path='/entertainment' element={<News key={"entertainment"} pageSize={this.pageSize} topic='entertainment' />} />
            <Route exact path='/health' element={<News key={"health"} pageSize={this.pageSize} topic='health' />} />
            <Route exact path='/science' element={<News key={"science"} pageSize={this.pageSize} topic='science' />} />
            <Route exact path='/sports' element={<News key={"sports"} pageSize={this.pageSize} topic='sports' />} />
            <Route exact path='/technology' element={<News key={"technology"} pageSize={this.pageSize} topic='technology' />} />
            <Route exact path='/general' element={<News key={"general"} pageSize={this.pageSize} topic='general' />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
