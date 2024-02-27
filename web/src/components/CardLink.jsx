import '../scss/layout/CardLink.scss';
import PropTypes from 'prop-types';

function CardLink({cardLink, hideCardLink}) {
  let showLoader = cardLink === '' ? '' : 'hidden';
  let showMessage = cardLink !== '' ? '' : 'hidden';
  return (
    <section className={`cardLink ${hideCardLink}`}>
      <span className={`cardLink__text ${showMessage}`}> La tarjeta ha sido creada:</span>
      <span className={`cardLink__loader ${showLoader}`}></span>
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

CardLink.propTypes = {
  cardLink : PropTypes.string,
  hideCardLink: PropTypes.string.isRequired,
};
export default CardLink;
