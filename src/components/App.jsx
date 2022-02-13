import React, { Component } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedBackOptions from './FeedBackoptions/FeedBackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countPositiveFeedbackPercentage = total => {
    const { good } = this.state;
    return ((good / total) * 100).toFixed(0);
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  LeaveFeedBack = e => {
    const currentBtn = e.currentTarget.textContent.toLowerCase();
    const keys = Object.keys(this.state);
    for (const key of keys) {
      this.setState(prevState => {
        if (key === currentBtn) {
          return {
            [key]: prevState[key] + 1,
          };
        }
      });
    }
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedBackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedBack={this.LeaveFeedBack}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage(this.countTotalFeedback())}
          />
        </Section>
      </>
    );
  }
}

export { App };
