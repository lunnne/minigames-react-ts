import React, { Component } from 'react';

interface State {
  first: number;
  second: number;
  value: string;
  result: string;
}

class TimesTableClass extends Component<{}, State> {
  state = {
    first: Math.ceil(Math.random() * 9),
    second: Math.ceil(Math.random() * 9),
    value: '',
    result: '',
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (parseInt(this.state.value) === this.state.first * this.state.second) {
      this.setState((prevState) => {
        return {
          result: 'right answer!' + prevState.value,
          first: Math.ceil(Math.random() * 9),
          second: Math.ceil(Math.random() * 9),
          value: '',
        };
      });
      this.input?.focus();
    } else {
      this.setState({
        result: 'Wrong answer!',
        value: '',
      });
      this.input?.focus();
    }
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };
  input: HTMLInputElement | null = null;

  onRefInput = (c: HTMLInputElement) => {
    this.input = c;
  };

  render() {
    return (
      <>
        <h1>
          {this.state.first} X {this.state.second} = ?
        </h1>
        <form onSubmit={this.handleSubmit}>
          <input ref={this.onRefInput} type="number" value={this.state.value} placeholder="type your answer here!" onChange={this.handleChange} />
          <button>Enter!</button>
        </form>
        <p>{this.state.result}</p>
      </>
    );
  }
}

export default TimesTableClass;
