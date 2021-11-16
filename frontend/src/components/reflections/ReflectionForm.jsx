import React from 'react';
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

  const onSubmit = (data) => {
    const formReflection = {
      user: currentUser.id,
      entry: data.entry,
    };
    if (reflection) formReflection['id'] = reflection._id;

    processForm(formReflection).then(() => closeForm());
  };

  return (
    <div className='main-reflection-form-content'>
      <form className='reflection-form' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='email'>Daily Reflection {errors.entry}</label>
        <input
          type='textarea'
          id='email'
          spellCheck='false'
          {...register('entry', {
            required: 'Reflection entry is required',
          })}
          placeholder='Reflection ...'
          rows='5'
          cols='50'
        />

        <button>Save Reflection</button>
        <button type='button' onClick={closeForm}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ReflectionForm;
