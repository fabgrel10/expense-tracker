import CloseButton from '../assets/images/close.svg';

const Modal = ({ setModal, animateModal, setAnimateModal }) => {
  const handleCloseButton = () => {
    setAnimateModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    <div className="modal">
      <div className="close-modal">
        <img src={CloseButton} alt="Close modal" onClick={handleCloseButton} />
      </div>
      <form className={`form ${animateModal ? 'animate' : 'close'}`}>
        <legend>New Expense</legend>
      </form>
    </div>
  );
};

export default Modal;
