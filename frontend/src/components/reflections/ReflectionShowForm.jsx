import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import {
  createReflection,
  updateReflection,
} from '../../actions/reflections_actions';
import { openModal } from '../../actions/modal_actions';
import { updateExp } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.user,
  reflection: state.entities.reflections[ownProps.reflectionId],
});

const mapDispatchToProps = {
  createReflection,
  updateReflection,
  openModal,
  updateExp,
};

const ReflectionShowForm = ({
  closeForm,
  openReflectionShow,
  currentUser,
  reflection,
  createReflection,
  updateReflection,
  openModal,
  updateExp,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
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

    processForm(formReflection).then((action) => {
      if (!reflection) {
        updateExp(currentUser.id, 2);
      }
      setEditMode(false);
      openReflectionShow(action.reflection._id);
    });
  };

  const handleDelete = () => {
    openModal({
      type: 'deleteReflection',
      reflection: reflection,
      closeForm: closeForm,
    });
  };

  const content =
    !reflection || editMode ? (
      <textarea
        autoFocus
        id='reflection-input'
        rows='18'
        cols='83'
        wrap='hard'
        spellCheck='false'
        {...register('entry', {
          required: 'Reflection entry is required',
        })}
        placeholder='How are you feeling today? What is the best thing that happened today? How did it make you feel?'
      />
    ) : (
      <div className='reflection-entry'>{reflection.entry}</div>
    );

  const buttons = !reflection ? (
    <button>Save Reflection</button>
  ) : editMode ? (
    <>
      <button>Save Changes</button>
      <button
        type='button'
        onClick={(e) => {
          e.preventDefault();
          setEditMode(false);
        }}
      >
        Cancel Edit
      </button>
    </>
  ) : (
    <>
      <button
        type='button'
        onClick={(e) => {
          e.preventDefault();
          setValue('entry', reflection.entry);
          setEditMode(true);
        }}
      >
        Edit Entry
      </button>
      <button type='button' onClick={handleDelete}>
        Delete
      </button>
    </>
  );

  const date = reflection ? new Date(reflection.updatedAt) : null;

  return (
    <div className='main-reflection-form-content'>
      <form className='reflection-form' onSubmit={handleSubmit(onSubmit)}>
        {reflection ? (
          <div className='reflection-form-header'>
            <span>{date.toLocaleDateString().slice(0, 5)} </span>
            <span>{`${date.getHours()}:${
              date.getMinutes() > 10
                ? date.getMinutes()
                : `0${date.getMinutes()}`
            } ${date.toLocaleTimeString().slice(-2)}`}</span>
          </div>
        ) : (
          <div className='reflection-form-header'>
            <h3>Add A New Reflection</h3>
            <div className='reflection-input-errors'>
              <span htmlFor='reflection-input'>{errors.entry?.message}</span>
            </div>
          </div>
        )}
        {content}

        <div className='reflection-form-buttons'>
          {buttons}
          <button type='button' onClick={closeForm}>
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ReflectionShowForm);
