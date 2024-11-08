import { useState } from 'react';

export const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className='single-tour' key={id}>
      <span className='tour-price'>${price}</span>
      <img src={image} alt={name} className='img' />

      <div className='tour-info'>
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            className='info-btn'
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>

        <button className='delete-btn' onClick={() => removeTour(id)}>
          not interested
        </button>
      </div>
    </article>
  );
};
