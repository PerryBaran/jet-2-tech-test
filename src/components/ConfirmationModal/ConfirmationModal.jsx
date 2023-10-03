import css from './styles/confirmationModal.module.scss';
import check from '../../images/check.png';

function ConfirmationModal({ onCancelClick }) {
  return (
    <div className={css['modal-container']}>
      <div className={css['modal']}>
        <div className={css['modal__wrapper']}>
          <div className={css['modal__header']}>
            <img alt="green tick" src={check} className={css['modal__header__image']}/>
            <h2>Congratulations your jet2 holiday booking has been confirmed</h2>
          </div>
          <p className={css['modal__text']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur inventore, dignissimos quasi fuga sunt,
            nihil nemo labore? Molestiae, eum, eos! Illum non laborum asperiores, mollitia minima quasi atque. Elgendi,
            atque.
          </p>
        </div>
        <div className={css['modal__footer']}>
          <button className={`${css['modal__button']} ${css['modal__button--cancel']}`} onClick={onCancelClick}>Cancel</button>
          <button className={`${css['modal__button']} ${css['modal__button--continue']}`} onClick={onCancelClick}>Continue</button>
        </div>
      </div>      
    </div>
  );
}

export default ConfirmationModal;
