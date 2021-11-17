import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux'
import { createReflection, updateReflection, deleteReflection } from '../../actions/reflections_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.user,
  reflection: state.entities.reflections[ownProps.reflectionId]
})

const mapDispatchToProps = {
  createReflection,
  updateReflection,
  deleteReflection
}

const ReflectionShowForm = ({
  closeForm,
  openReflectionShow,
  currentUser,
  reflection,
  createReflection,
  updateReflection,
  deleteReflection
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    reValidateMode: 'onSubmit',
    shouldFocusError: false,
    defaultValues: { entry: reflection ? reflection.entry : '' },
  });

  const [editMode, setEditMode] = useState(false);

  const onSubmit = (data) => {
    const formReflection = {
      user: currentUser.id,
      entry: data.entry,
    };
    if (reflection) formReflection['id'] = reflection._id;

    const processForm = editMode ? updateReflection : createReflection;

    processForm(formReflection)
      .then((action) => {
        setEditMode(false);
        openReflectionShow(action.reflection._id);
      });
  };

  const handleDelete = (e) => {
    // e.preventDefault();
    deleteReflection(reflection._id)
      .then(() => closeForm());
  }

  const content = (!reflection || editMode) ? (
    <input
      type='textarea'
      id='email'
      spellCheck='false'
      {...register('entry', {
        required: 'Reflection entry is required',
      })}
      placeholder='Reflection ...'
      rows='5' cols='50'
    />
  ) : (
    <div>
      {reflection.entry}
    </div>
  )

  const buttons = !reflection ? (
    <button>
      Save Reflection
    </button>
  ) : editMode ? (
    <>
      <button>
        Save Changes
      </button>
      <button type="button" onClick={(e) => {
        e.preventDefault();
        setEditMode(false)
      }}>
        Cancel Edit
      </button>
    </>
  ) : (
    <>
      <button type='button' onClick={(e) => {
        e.preventDefault();
        setEditMode(true)
      }}>
        Edit Entry
      </button>
      <button type='button' onClick={handleDelete}>
        Delete
      </button>
    </>
  )

  return (
    <div className='main-reflection-form-content'>
      <form className='reflection-form' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='email'>Daily Reflection {errors.entry}</label>
        { content }

        { buttons }
        <button type='button' onClick={closeForm}>
          Back
        </button>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ReflectionShowForm)
