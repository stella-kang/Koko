const ReflectionWidgetItem = ({ reflection, openReflectionShow }) => {
  const date = new Date(reflection.updatedAt);

  return (
    <div className='journal-carousel-item'>
      <div className='reflection-item-header'>
        <div className='date-time' onClick={() => openReflectionShow(reflection._id)}>
          <p>{ `${date.getMonth()+1}/${date.getDate()}`}</p>
          <p>{ `${date.getHours()%12}:${date.getMinutes().toString().padStart(2, '0')} ${date.getHours() > 11 ? "PM" : "AM"}` }</p>
        </div>
      </div>

      <div className='reflection-item-entry'>
        <p>{reflection.entry}</p>
      </div>
    </div>
  );
};

export default ReflectionWidgetItem;
