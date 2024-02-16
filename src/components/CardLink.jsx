// import React from 'react'
import '../scss/layout/Card.scss';
import PropTypes from 'prop-types';

function Card({cardLink, hidden}) {
  return (
    <section className={`cardlink ${hidden}`}>
      <span className='card__text'> La tarjeta ha sido creada: </span>
      <a
        href={cardLink}
        className='cardlink__text'
        target='_blank'
        rel='noreferrer'
      >
        <strong>{cardLink}</strong>
      </a>
    </section>
  );
}

Card.propTypes = {
  cardLink : PropTypes.string,
  hidden: PropTypes.string.isRequired,
};
export default Card;
