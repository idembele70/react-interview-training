import { useReducer, useState } from 'react';

const initialStore = {
  username: '',
  password: '',
  error: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value, error: '', };
    case 'SET_ERROR':
      return { ...state, error: 'Password minimum length is 6.' };
    case 'RESET':
      return initialStore;
    default:
      return state;
  }
};

export default function Login() {
  const [values, dispatch] = useReducer(reducer, initialStore);
  const [data, setData] = useState({
    username: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'SET_FIELD', ...values, field: name, value });
    
    if (name === 'password' && value.length < 6)
      dispatch({ type: 'SET_ERROR'})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.error) return;
    const { username, password } = values;
    setData({
      username,
      password,
    });
    dispatch({ type: 'RESET'});
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" autoComplete="username" value={values.username} onChange={handleChange} placeholder='Enter a username'/><br/>
        <input type="password" name="password" autoComplete="new-password" value={values.password} onChange={handleChange} placeholder='Enter a password'/><br/>
        {values.error && <div>{values.error}</div>}
        <button type="submit" disabled={values.error}>Submit</button>
      </form>
      <pre>
      { JSON.stringify(data, null, 2) }
      </pre>
    </div>
  )
}
