const ReflectionWidgetItem = ({ reflection, openEditForm }) => {
  return (
    <div className="journal-carousel-item">
      { reflection.entry }

      <button onClick={() => openEditForm(reflection)}>Edit</button>
    </div>
  )
}

export default ReflectionWidgetItem
