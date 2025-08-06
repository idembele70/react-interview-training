import React from 'react';

export function ToggleSwitch() {
  const [on, setOn] = React.useState(true);

  return (
    <button onClick={() => setOn(v => !v)}>{on ? 'ON' : 'OFF'}</button>
  )
}

export function ScrollToTopButton() {
  const containerRef = React.useRef(null);
  const btnRef = React.useRef(null);

  const handleScrollToTop = () => {
    containerRef.current.scrollTop = 0;
  }

  const handleToggleButtonVisibility = () => {
      const scrollY = containerRef.current.scrollTop
      console.log(scrollY);
      btnRef.current.style.visibility = scrollY  < 300 ? 'hidden' : 'visible';
  }

  React.useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('scroll', handleToggleButtonVisibility);

    const btn = btnRef.current;
    btn.addEventListener('click', handleScrollToTop);
    return () => {
      container.removeEventListener('scroll', handleToggleButtonVisibility);
      btn.removeEventListener('click', handleScrollToTop);
    }
  }, []);

  const containerStyle = {
    height: 200,
    overflowX: 'hidden',
    scrollBehavior: 'smooth',
  };
  const buttonStyle = {
    padding: 4,
    margin: '0 auto',
    visibility: 'hidden'
  };
  return (
    <>
      <div ref={containerRef} style={containerStyle}>
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
      </div>
      <button ref={btnRef} type='button' style={buttonStyle}>Scroll to Top</button>
    </>
  )
}

export function FormValidator() {
  const [values, setValues] = React.useState({
    email: '',
    password: '',
  })
  const [isDirty, setDirty] = React.useState({
    email: false,
    password: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues(prev => ({...prev, [name]: value}));
  }

  const formRowItemList = [
    { id: 1, name: 'email', type: 'email', value: values.email, onChange: handleChange, isDirty: isDirty.email },
    { id: 2, name: 'password', type: 'password', value: values.password, onChange: handleChange, isDirty: isDirty.password }
  ];

  const formRowItems = formRowItemList.map((item) => <FormRow key={item.id} {...item} />)

  const handleSubmit = (e) => {
    e.preventDefault();
    const fields = ['email', 'password'];
    fields.forEach(field => {
      if(!values[field])
        setDirty(prev =>({ ...prev, [field]: true}));
    })
    if(values.email && values.password) {
      console.log(values);
      setDirty({email: false, password: false});
      setValues({email: '', password: ''});
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      {formRowItems}
      <button type="submit">Submit</button>
    </form>
  )
}

const FormRow = ({ name, type, value, onChange, isDirty }) => {
  const autoComplete = type === 'password' ? 'current-password' : type
  return (
    <>
      <input type={type} name={name} id={name} value={value} onChange={onChange} autoComplete={autoComplete} /> <br />
      {!value && isDirty && <span>{name} Cannot be empty</span>}<br />
      <br />
    </>
  )
}

export function Horloge() {
  const getTime = () => new Date().toLocaleTimeString('fr-FR')
  const [time, setTime] = React.useState(getTime());


  React.useEffect(() => {
    const DELAY = 1_000;
    const interval = setInterval(() => {
      const newTime = getTime();
      setTime(newTime);
    }, DELAY);

    return () => clearInterval(interval);
  }, []);

  return <h1>{time}</h1>
}

export function DynamicList() {
  const [list, setList] = React.useState([]);
  const [value, setValue] = React.useState('');
  const handleAddItem = (e) => {
    e.preventDefault();
    setList(prev => [...prev, {id: list.length, name: value}]);
    setValue('');
  }
  const listItems = list.map(item => <li key={item.id}>{item.name}</li>);

  return (
    <>
    <form onSubmit={handleAddItem}>
      <input type="text" name="item" id="item" value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit" disabled={!value}>Submit</button>
    </form>
    <ul>{listItems}</ul>
    </>
  )
}