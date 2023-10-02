import css from './styles/confirmationModal.module.scss';
import check from './images/check.png';

function ConfirmationModal() {
  return (
    <div className={css['modal-container']}>
      <div className={css['text-container']}>
        <div className={css['heading']}>
          <img alt="green tick" src={check} />
          <h2>Congratulations your jet2 holiday booking has been confirmed</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur inventore, dignissimos quasi fuga sunt,
          nihil nemo labore? Molestiae, eum, eos! Illum non laborum asperiores, mollitia minima quasi atque. Elgendi,
          atque.
        </p>
      </div>
      <div className={css['btn-container']}>
        <button className={css['cancel']}>Cancel</button>
        <button className={css['continue']}>Continue</button>
      </div>
    </div>
  );
}

export default ConfirmationModal;
