import { useState, useEffect } from 'react';
import { Tours } from './components/Tours';
import { Loading } from './components/Loading';

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        setIsLoading(false);
        setIsError(true);
        return;
      }
      const data = await resp.json();
      setTours(data);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <h1>ERROR!!!!</h1>;
  }
  if (tours.length < 1 && !isLoading) {
    return (
      <main>
        <div className='title no-tours'>
          <h2>our tours</h2>
          <div className='title-underline'></div>
          <button className='btn remove-tours' onClick={fetchData}>
            refresh tours
          </button>
        </div>
      </main>
    );
  }

  return (
    <>
      <main>
        <div className='title'>
          <h2>our tours</h2>
          <div className='title-underline'></div>
        </div>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    </>
  );
};
export default App;
