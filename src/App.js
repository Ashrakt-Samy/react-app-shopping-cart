import React, { Component } from 'react';
import Counters from './components/counters.jsx';
import NavBar from './components/navBar.jsx';
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handelIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters });
  };
  handelReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;

    });
    this.setState({ counters });
  };
  handelDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container-fluid">
          <Counters
            counters={this.state.counters}
            onReset={this.handelReset}
            onIncrement={this.handelIncrement}
            onDelete={this.handelDelete} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;