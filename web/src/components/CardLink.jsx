import '../scss/layout/CardLink.scss';
import PropTypes from 'prop-types';

function Card({cardLink, hideCardLink}) {
  let hideLoader = cardLink !== '' ? 'hidden' : '';
  return (
    <section className={`cardLink ${hideCardLink}`}>
      <span className='cardLink__text'> La tarjeta ha sido creada: </span>
      <span className={`cardLink__loader ${hideLoader}`}></span>
      <a
        href={cardLink}
        className='cardLink__url'
        target='_blank'
        rel='noreferrer'
      >
        <strong className='cardLink__url'>{cardLink}</strong>
      </a>
    </section>
  );
}

Card.propTypes = {
  cardLink : PropTypes.string,
  hideCardLink: PropTypes.string.isRequired,
};
export default Card;