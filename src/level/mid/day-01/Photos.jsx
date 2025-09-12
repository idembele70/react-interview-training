import useFetch from './hooks/useFetch'

export default function Photos() {
  const { data, loading, error } = useFetch('/photos');

  if (loading)
    return <h1>Loading...</h1>

  if (error)
    return <h1>{error}</h1>

  const photosItems = data?.map((item,idx) => <li key={idx}>{item.title}</li>)
  
  return (
    <ul>
      {data?.length ? photosItems : 'No Photos found'}
    </ul>
  );
}
