import { useMemo, useReducer, useState } from 'react';


const initialStore = {
  fields: [
    {
      name: '0', 
      value: '',
    },
  ],
};

const reducer = (state, action) => {

  switch(action.type) {
    case 'ADD_FIELD':
      return {...state, fields: [...state.fields, action.field]};
    case 'REMOVE_FIELD':
      return {...state, fields: state.fields.filter(item => item.name !== action.name) };
    case 'UPDATE_FIELD':
      return {...state, fields: state.fields.map(item => item.name === action.name ? { ...item, value: action.value } : item) };
    case 'SUBMIT_FIELDS':
      return initialStore;

    default:
      return state;
  }
}

export default function DynamicForm() {
  const [state, dispatch] = useReducer(reducer, initialStore);
  const [fields, setFields] = useState('');

  const handleChange = (e) => {
    const { value, name } = e.target;
    dispatch({ type: 'UPDATE_FIELD', name, value });
  }

  const addField = () => {
    dispatch({ type: 'ADD_FIELD', field: { name: state.fields.length.toString(), value: '' } });
  }

  const fieldItems = useMemo(() => state.fields.map(
    field => (
      <div key={field.name}>
        <input type="text" name={field.name} value={field.value} onChange={handleChange} />
      </div>
    )
  ), [state.fields]);

  const handleSubmit = () => {
    setFields(JSON.stringify(state.fields, null, 2));
    dispatch({ type: 'SUBMIT_FIELDS' });
  }

  return (
    <div>
      {fieldItems}
      <hr />
      <button type="button" onClick={addField}>Add a field</button>
      <button type="submit" onClick={handleSubmit}>Submit</button>
      <hr />
      <pre>{fields}</pre>
    </div>
  )
}
