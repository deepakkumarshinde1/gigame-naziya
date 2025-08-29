import { Component, useState } from "react";

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
      timer: "00:00:00",
      intervalId: null,
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (props.count !== 13) {
      return {
        ...state,
        count: props.count,
      };
    }
    return null;
  }
  inc = (event) => {
    this.setState((pState) => {
      return {
        ...pState,
        count: pState.count + 1,
      };
    });
  };

  componentDidMount() {
    console.log("class is mounted");
    let intervalId = setInterval(() => {
      this.setState((pState) => {
        return {
          ...pState,
          timer: new Date().toTimeString(),
        };
      });
    }, 1000);

    this.setState((pState) => {
      return {
        ...pState,
        intervalId,
      };
    });
  }

  componentDidUpdate() {
    console.log("class is updated");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.count > 18) {
      alert("You have reached the limit");
      return false;
    } else {
      return true;
    }
  }

  componentWillUnmount() {
    console.log("class comp is unmount");
    clearInterval(this.state.intervalId);
  }
  render = () => {
    return (
      <>
        <p>
          Class Count:{this.state.count}
          <button onClick={this.inc}>INC</button>
        </p>
        <p>{this.state.timer}</p>
      </>
    );
  };
}

export default CounterClass;
