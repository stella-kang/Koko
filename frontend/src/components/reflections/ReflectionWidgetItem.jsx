import { FaEdit } from 'react-icons/fa';

const ReflectionWidgetItem = ({ reflection, openEditForm }) => {
  const date = new Date(reflection.updatedAt);

  return (
    <div className='journal-carousel-item'>
      <div className='reflection-item-header'>
        <div className='date-time'>
          {date.toLocaleDateString().slice(0, 5)}{' '}
          {`${date.getHours()}: ${date.getMinutes()} ${date
            .toLocaleTimeString()
            .slice(-2)}`}
        </div>
        <div className='edit-btn' onClick={() => openEditForm(reflection)}>
          <FaEdit />
        </div>
      </div>

      <div className='reflection-item-entry'>
        <p>{reflection.entry}</p>
      </div>
    </div>
  );
};

export default ReflectionWidgetItem;
