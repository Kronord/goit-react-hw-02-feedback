import React from 'react';
import propTypes from 'prop-types';
import s from './FeedBackOptions.module.css';

const FeedBackOptions = ({ onLeaveFeedBack, options }) => {
  console.log(onLeaveFeedBack, options);
  return (
    <div className={s.btnBox}>
      {options.map((label, index) => {
        return (<button onClick={onLeaveFeedBack} key={index} className={s.btn}>{ label }</button>)
      })}
    </div>
  );
};

FeedBackOptions.propTypes = {
  onLeaveFeedBack: propTypes.func.isRequired,
  options: propTypes.arrayOf(propTypes.string.isRequired),
};

export default FeedBackOptions;
