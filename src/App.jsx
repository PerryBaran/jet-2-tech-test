import { useState } from 'react';
import ConfirmationModal from './components/ConfirmationModal/ConfirmationModal';

function App() {
  const [showModal, setShowModal] = useState([]);

  const onFireModalClick = () => {
    setShowModal((prev) => {
      const clone = [...prev];
      clone.push(true);
      return clone;
    });
  };

  const onCancelClick = (index) => {
    return () =>
      setShowModal((prev) => {
        const clone = [...prev];
        clone.splice(index, 1);
        return clone;
      });
  };

  return (
    <div>
      <button onClick={onFireModalClick}>Fire Modal</button>
      {showModal.map((_, index) => {
        return <ConfirmationModal onCancelClick={onCancelClick(index)} />;
      })}
    </div>
  );
}

export default App;
