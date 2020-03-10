import React, { Component } from "react";
import Section from "./section";
import FeedbackOptions from "./feedbackOptions";
import Statistic from "./statistics";
import Notification from "./notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    getTotal: () => {
      const { good, neutral, bad } = this.state;
      return good + neutral + bad;
    },
    getPercentage: () => {
      return Math.round((this.state.good / this.state.getTotal()) * 100);
    }
  };

  onHandleClick = e => {
    const name = e.target.name;
    this.setState({
      [name]: this.state[name] + 1
    });
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onHandleClick={this.onHandleClick} />
        </Section>

        {this.state.getTotal() === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistics">
            <Statistic {...this.state} />
          </Section>
        )}
      </>
    );
  }
}

export default App;
