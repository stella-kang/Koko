import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux'
import { createReflection, updateReflection } from '../../actions/reflections_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.user,
  reflection: state.entities.reflections[ownProps.reflectionId]
})

const mapDispatchToProps = {
  createReflection,
  updateReflection
}

const ReflectionForm = ({
  closeForm,
  openReflectionShow,
  currentUser,
  reflection,
  createReflection,
  updateReflection,
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

  console.log(editMode);
  console.log(reflection);

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

  const button = !reflection ? (
    <button>
      Save Reflection
    </button>
  ) : editMode ? (
    <>
      <button>
        Save Changes
      </button>
      <button type="button" onClick={() => setEditMode(false)}>
        Cancel Edit
      </button>
    </>
  ) : (
    <button type='button' onClick={() => setEditMode(true)}>
      Edit Entry
    </button>
  )

  return (
    <div className='main-reflection-form-content'>
      <form className='reflection-form' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='email'>Daily Reflection {errors.entry}</label>
        { content }

        { button }
        <button type='button' onClick={closeForm}>
          Back
        </button>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ReflectionForm)
