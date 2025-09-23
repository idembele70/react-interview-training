import React from 'react';

export default function Counter() {
  const [count, setCount] = React.useState(0);
  const [step] = React.useState(1);

  const handleIncrement = React.useCallback(() => {
    setCount(c => c + step )
  }, [step])
  
  return (
    <>
      <Display count={count} />
      <button type='button' onClick={handleIncrement}>+{step}</button>
    </>
  )
}

const Display = React.memo(function(props) {

  return <h2>{props.count}</h2>
})
