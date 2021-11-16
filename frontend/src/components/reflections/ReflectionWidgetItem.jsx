const ReflectionWidgetItem = ({ reflection, openEditForm }) => {

  const date = new Date(reflection.updatedAt);

  return (
    <div className="journal-carousel-item">
      { date.toLocaleDateString() }
      { date.toLocaleTimeString() }
      { reflection.entry }

      <button onClick={() => openEditForm(reflection)}>Edit</button>
    </div>
  )
}

export default ReflectionWidgetItem
