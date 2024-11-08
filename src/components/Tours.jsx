import { Tour } from './Tour';

export const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className='tours'>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};
