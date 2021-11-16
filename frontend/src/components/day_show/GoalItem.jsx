import React from 'react';

const GoalItem = ({goal}) => {
  return <li>
    {goal.description}
  </li>
}

export default GoalItem;
