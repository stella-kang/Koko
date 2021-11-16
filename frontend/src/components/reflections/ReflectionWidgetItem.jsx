const ReflectionWidgetItem = ({ reflection, openEditForm }) => {
  const date = new Date(reflection.updatedAt);

  return (
    <div className='journal-carousel-item'>
      <div className='left-side-items'>
        <div className='time-items'>
          <div className='reflection-item-date'>
            {date.toLocaleDateString().slice(0, 5)}
          </div>
          <div className='reflection-item-time'>
            {`${date.getHours()}: ${date.getMinutes()} ${date
              .toLocaleTimeString()
              .slice(-2)}`}
          </div>
        </div>
        <button
          className='edit-reflection-btn'
          onClick={() => openEditForm(reflection)}
        >
          Edit
        </button>
      </div>
      <div className='reflection-item-entry'>{reflection.entry}</div>
    </div>
  );
};

export default ReflectionWidgetItem;
