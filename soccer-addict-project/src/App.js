import React, { Component } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <Header />
      <Hero />
      <Footer />

      </div>

    );
  }
}

export default App;
