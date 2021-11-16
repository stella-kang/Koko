import React from 'react';
import { useForm } from 'react-hook-form';

const ReflectionForm = ({ closeForm, processForm }) => {
  const { register, formState: { errors }, handleSubmit } = useForm({
    reValidateMode: 'onSubmit',
    shouldFocusError: false
  });

  const onSubmit = (data) => {
    const reflection = {
      entry: data.entry
    }

    processForm(reflection)
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
        </div>
      </form>
    </div>
  )
}

export default ReflectionForm
