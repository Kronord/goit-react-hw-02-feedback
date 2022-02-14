import React from 'react';
import s from './FeedBackOptions.module.css'

const FeedBackOptions = ({onLeaveFeedBack, options}) => {
  return (
    <div className={s.btnBox}>
      {options.map((label, index) => {
        return (<button onClick={onLeaveFeedBack} key={index} className={s.btn}>{ label }</button>)
      })}
    </div>
  );
};

export default FeedBackOptions;
