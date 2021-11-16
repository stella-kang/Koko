import React from 'react';
import { useForm } from 'react-hook-form';

const ReflectionForm = ({ closeForm, reflection, currentUser, processForm }) => {
  const { register, formState: { errors }, handleSubmit } = useForm({
    reValidateMode: 'onSubmit',
    shouldFocusError: false,
    defaultValues: { entry: reflection ? reflection.entry : '' }
  });

  const onSubmit = (data) => {
    const formReflection = {
      user: currentUser.id,
      entry: data.entry
    }
    if (reflection) formReflection['id'] = reflection._id

    processForm(formReflection)
      .then(() => closeForm());
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Reflection {errors.entry}</label>
          <input type="texarea" id="email" spellCheck="false"
            {...register("entry", {
              required: "Reflection entry is required"
            })}
            placeholder="Reflection"
          />

          <button>Save Reflection</button>
          <button type="button" onClick={closeForm}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default ReflectionForm
