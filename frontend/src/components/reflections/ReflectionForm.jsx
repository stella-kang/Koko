import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ReflectionForm = ({
  closeForm,
  reflection,
  currentUser,
  processForm,
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

  const onSubmit = (data) => {
    const formReflection = {
      user: currentUser.id,
      entry: data.entry,
    };
    if (reflection) formReflection['id'] = reflection._id;

    processForm(formReflection).then(() => closeForm());
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

export default ReflectionForm;
