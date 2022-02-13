import React from 'react';

const FeedBackOptions = ({onLeaveFeedBack, options}) => {
  return (
    <div>
      {options.map((label, index) => {
        return (<button onClick={onLeaveFeedBack} key={index}>{ label }</button>)
      })}
    </div>
  );
};

export default FeedBackOptions;
