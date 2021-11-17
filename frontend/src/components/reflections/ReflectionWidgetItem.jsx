import { FaEdit } from 'react-icons/fa';

const ReflectionWidgetItem = ({ reflection, openReflectionShow }) => {
  const date = new Date(reflection.updatedAt);

  return (
    <div className='journal-carousel-item'>
      <div className='reflection-item-header'>
        <div className='date-time' onClick={() => openReflectionShow(reflection._id)}>
          <p>{date.toLocaleDateString().slice(0, 5)}{' '}</p>
          <p>{`${date.getHours()}:${date.getMinutes() > 10 ? date.getMinutes() : `0${date.getMinutes()}`} ${date
            .toLocaleTimeString()
            .slice(-2)}`}</p>
        </div>
        {/* <div className='edit-btn' onClick={() => openReflectionShow(reflection._id)}>
          <FaEdit />
        </div> */}
      </div>

      <div className='reflection-item-entry'>
        <p>{reflection.entry}</p>
      </div>
    </div>
  );
};

export default ReflectionWidgetItem;
