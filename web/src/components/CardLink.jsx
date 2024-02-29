import '../scss/layout/CardLink.scss';
import PropTypes from 'prop-types';

function CardLink({ cardLink, hideCardLink }) {
  let showLoader = cardLink === '' ? '' : 'hidden';
  let showMessage = cardLink !== '' ? '' : 'hidden';
  let url = encodeURIComponent(cardLink);
  return (
    <section className={`cardLink ${hideCardLink}`}>
      <span className={`cardLink__text ${showMessage}`}>
        {' '}
        La tarjeta ha sido creada:
      </span>
      <span className={`cardLink__loader ${showLoader}`}></span>
      <a
        href={cardLink}
        className='cardLink__url'
        target='_blank'
        rel='noreferrer'
      >
        <strong className='cardLink__url'>{cardLink}</strong>
      </a>

      <a
        className={`linkedin ${showMessage}`}
        target='_blank'
        title='Share on LinkedIn'
        href={`http://www.linkedin.com/shareArticle?mini=true&url=${url}`}
      >
        Compartir en Linked<i class='fa fa-linkedin'></i>
      </a>
    </section>
  );
}

CardLink.propTypes = {
  cardLink: PropTypes.string,
  hideCardLink: PropTypes.string.isRequired,
};
export default CardLink;
