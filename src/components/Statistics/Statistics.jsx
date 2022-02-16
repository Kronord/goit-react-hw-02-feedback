import React from 'react';
import Notification from './Notification';
import propTypes from 'prop-types';
import { oneOfType } from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  console.log(positivePercentage);
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

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: oneOfType([
    propTypes.string.isRequired,
    propTypes.number.isRequired,
  ]),
};

export default Statistics;
