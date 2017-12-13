import React, { Component } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

// pages
import MoviesDetailPage from './pages/moviesDetailPage/moviesDetailPage'
import MoviesIndexPage from './pages/moviesIndexPage/moviesIndexPage'

// components
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

class App extends Component {
  render() {
    console.log('APP > this.state = ', this.state)

    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <br />
          <br />
          <br />

          <Switch>
            <Route exact path="/" render={(props) => {
              console.log('rendering home page > this.state = ', this.state)
              return (<div>home page</div>)
            }}/>

            <Route 
              exact
              path='/movies' 
              render={(props) => <MoviesIndexPage />} 
            />
            <Route 
              exact
              path='/movies/:id' 
              render={(props) => {
                // console.log('route > route param id =', props.match.params.id)
                return <MoviesDetailPage id={props.match.params.id} />
            }} 
            />
          </Switch>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <Footer />

        </div>
      </BrowserRouter>

    );
  }
}

export default App;
