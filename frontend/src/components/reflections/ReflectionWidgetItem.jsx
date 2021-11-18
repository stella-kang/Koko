const ReflectionWidgetItem = ({ reflection, openReflectionShow }) => {
  const date = new Date(reflection.createdAt);
  const hour = date.getHours()%12;

  return (
    <div className='journal-carousel-item'>
      <div className='reflection-item-header'>
        <div className='date-time' onClick={() => openReflectionShow(reflection._id)}>
          <p>{ `${date.getMonth()+1}/${date.getDate()}`}</p>
          <p>{ `${hour === 0 ? 12: hour}:${date.getMinutes().toString().padStart(2, '0')} ${date.getHours() > 11 ? "PM" : "AM"}` }</p>
        </div>
      </div>

      <div className='reflection-item-entry'>
        <p>{reflection.entry}</p>
      </div>
    </div>
  );
};

export default ReflectionWidgetItem;
