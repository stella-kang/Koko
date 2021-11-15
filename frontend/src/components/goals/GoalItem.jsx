import React from 'react';

const GoalItem = ({ key, title, body, onDelete }) => {

  const deleteHandler = () => {
    onDelete(key);
  };

  return (
    <li>
      <h3>{title}</h3>
      <p>{body}</p>
      <button>Edit</button>
      <button onClick={deleteHandler}>Delete</button>
    </li>
  );
};

export default GoalItem;
