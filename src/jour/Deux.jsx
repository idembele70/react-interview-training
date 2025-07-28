import React from 'react';

export function LoginForm() {
  const [values, setValues] = React.useState({
    email: '',
    password: '',
  });

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
Email: ${values.email}
Mot de passe: ${values.password}
`);
    setValues({
      email: '',
      password: ''
    });
  }
  return (
    <form onSubmit={handleSubmit} style={{ padding: '16px' }}>
      <label htmlFor="email">Email: </label> <br />
      <input type="text" name="email" id="email" value={values.email} onChange={onChange} /><br />
      <label htmlFor="password">Password: </label><br />
      <input type="password" name="password" id="password" value={values.password} onChange={onChange} /><br />
      <input type="submit" value="Se connecter" />
    </form>
  )
}


export const WelcomeBox = function({isLoggedIn}) {
  if(isLoggedIn) return <h1>Bienvenue !</h1>
  return <h1>Veuillez vous connecter.</h1>
}

export const ToggleText = function() {
  const [visible, setVisible] = React.useState(false);

  return (
   <>
    <h1>{visible && 'Text'}</h1>
    <button type="button" onClick={() => setVisible(v => !v)}>{visible ? 'Masquer' : 'Afficher'}</button>
   </> 
  )
}

export const AutoCounter = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if(prev >= 5) {
          clearInterval(interval)
          return prev
        }
        return prev + 1;
      })
    }, 1000);
    return () => {
      clearInterval(interval);
    }
  }, [])
  return <h1>{count}</h1>
}

export const FocusInput = () => {
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if(inputRef.current)
      inputRef.current.focus();
  }, [])

  return (
    <input type="text" ref={inputRef} />
  )
}