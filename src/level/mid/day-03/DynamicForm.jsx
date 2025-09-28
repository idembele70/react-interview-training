import React from 'react';

const initialStore = {
  fields : new Map([
  ['email', { type: 'email', name: 'email', value: '', error: '' },],
  ['password', { type: 'password', name: 'password', value: '', error: '' },],
  ['phone', { type: 'tel', name: 'phone', value: '', error: '' },],
  ]),
  'dynamicFields': [{ name: '0', value: ''},],
};

const isEmailInvalid = (field) => {
  if (field.name !== 'email')
    return false;
  return !(/.+@.+/.test(field.value));
}

const isPasswordInvalid = (field) => {
  if (field.name !== 'password')
    return false;
  return field.value.length < 6;
}

const reducer = (state, action) => {
  const { fields, dynamicFields } = state;
  
  switch(action.type) {
    case 'UPDATE_FIELD': {
      const newFields = new Map(fields);
      const field = newFields.get(action.field.name);
      const error = isEmailInvalid(action.field) ? 'invalid email'
                  : isPasswordInvalid(action.field) ? 'Password too short'
                  : '';
      const updatedField = { ...field, value: action.field.value, error };
      newFields.set(action.field.name, updatedField);

      return {...state, fields: newFields };
    }
    case 'UPDATE_DYNAMIC_FIELD': {
      const field = dynamicFields.find(f => f.name === action.field.name);
      const updatedDynamicField = dynamicFields.map(
        f => f.name === action.field.name
          ? { ...action.field }
          : f
        );

      return {...state, dynamicFields:  updatedDynamicField };
    }
      case 'ADD_DYNAMIC_FIELD': {
        return {...state, dynamicFields:  [...dynamicFields, { name: String(dynamicFields.length), value: ''}]};
    }
    default:
      return state;
  }
}

export default function DynamicForm() {
  const [state, dispatch] = React.useReducer(reducer, initialStore);
  const { fields, dynamicFields } = state;

  const handleChange = React.useCallback((e) => {
    const { value, name } = e.target;
    dispatch({ type: 'UPDATE_FIELD', field: { name, value } });
  }, []);

  const handleChangeDynamicField = React.useCallback((e) => {
    const { value, name } = e.target;
    dispatch({ type: 'UPDATE_DYNAMIC_FIELD', field: { name, value } });
  }, [])

  const handleAddDynamicField = () => {
    dispatch({ type: 'ADD_DYNAMIC_FIELD' });
  }

  const fieldItems = React.useMemo(() => {
    return dynamicFields.map(field => <DynamicField key={field.name} {...field} onChange={handleChangeDynamicField} />)
  }, [dynamicFields]);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  function isFormValid() {
    const hasValidField = fields.values().every(
      field => {
       return field.value && !field.error
      }
    )
    const hasValidDynamicFields = dynamicFields.every(
      field => field.value
    );

    return hasValidField && hasValidDynamicFields
  }

  const emailField = fields.get('email');
  const passwordField = fields.get('password');
  const phoneField = fields.get('phone');

  return (
    <form onSubmit={handleSubmit}>
      <FormField {...emailField} onChange={handleChange}  />
      <FormField {...passwordField} onChange={handleChange} />
      <FormField {...phoneField} onChange={handleChange} />
      <ul>
        {fieldItems}
        <li>
          <button type='button' onClick={handleAddDynamicField}>Add new field</button>
        </li>
      </ul>
      <button disabled={!isFormValid()} type='submit'>Submit</button>
    </form>
  );
}

const DynamicField = React.memo(({ name, value, onChange }) => {

  return (
    <div>
      <input type='text' name={name} value={value} onChange={onChange} placeholder='Start typing...' />
    </div>
  )
});

const FormField = React.memo(({ name, value, type, onChange, error }) => {
  const capitalize = (name) => name.replace(/[^a-zA-Z]/, m => m.toUpperCase());

  return (
    <div>
      <label htmlFor='email'>{capitalize(name)}:</label><br/>
        <input type={type} name={name} id={name} value={value} onChange={onChange} /><br />
        {error && <span>{error}<br /></span>}
    </div>
  );
})





