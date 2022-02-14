import React from 'react';
import Notification from './Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <Notification message="There is no feedback" />;
  } else {
    return (
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}&#x25;</p>
      </div>
    );
  }
};

export default Statistics;