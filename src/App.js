import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

export default class App extends Component {

  // name = "datta";
  pageSize = 3;

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#0cfe24'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path='/' element={<News setProgress={this.setProgress} key={"world"} pageSize={this.pageSize} topic='world' />} />
            <Route exact path='/india' element={<News setProgress={this.setProgress} key={"india"} pageSize={this.pageSize} topic='india' />} />
            <Route exact path='/us' element={<News setProgress={this.setProgress} key={"us"} pageSize={this.pageSize} topic='us' />} />
            <Route exact path='/business' element={<News setProgress={this.setProgress} key={"business"} pageSize={this.pageSize} topic='business' />} />
            <Route exact path='/entertainment' element={<News setProgress={this.setProgress} key={"entertainment"} pageSize={this.pageSize} topic='entertainment' />} />
            <Route exact path='/health' element={<News setProgress={this.setProgress} key={"health"} pageSize={this.pageSize} topic='health' />} />
            <Route exact path='/science' element={<News setProgress={this.setProgress} key={"science"} pageSize={this.pageSize} topic='science' />} />
            <Route exact path='/sports' element={<News setProgress={this.setProgress} key={"sports"} pageSize={this.pageSize} topic='sports' />} />
            <Route exact path='/technology' element={<News setProgress={this.setProgress} key={"technology"} pageSize={this.pageSize} topic='technology' />} />
            <Route exact path='/general' element={<News setProgress={this.setProgress} key={"general"} pageSize={this.pageSize} topic='general' />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
