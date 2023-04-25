import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickBtn = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => acc + value, 0);
  
  countPositiveFeedbackPercentage = () => {
    if (this.state.good === 0) return 0;
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h2>Please leave feedback</h2>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleClickBtn}
        />
        <Section title="Statistics">
        <h3>Statistics</h3>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        /></Section>
      </div>
    );
  }
}

// handleClickBtnGood = () => {
//   this.setState(prevState => ({
//     good: prevState.good + 1,
//   }));
// };
// handleClickBtnNetral = () => {
//   this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
// };
// handleClickBtnBad = () => {
//   this.setState(prevState => ({ bad: prevState.bad + 1 }));
// };

/* <button type="button" onClick={this.handleClickBtnGood}>
          Good
        </button>
        <button type="button" onClick={this.handleClickBtnNetral}>
          Neutral
        </button>
        <button type="button" onClick={this.handleClickBtnBad}>
          Bad
        </button> */
