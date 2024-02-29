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
      {/* <a
        target='_blank'
        className='c-black'
        rel='noreferrer'
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
      >
        Share on LinkedIn
      </a>
      <a
        target='_blank'
        title='Share on LinkedIn'
        href={`http://www.linkedin.com/shareArticle?mini=true&url=${url}`}
      >Second share option</a> */}
    </section>
  );
}

CardLink.propTypes = {
  cardLink: PropTypes.string,
  hideCardLink: PropTypes.string.isRequired,
};
export default CardLink;
