import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function BackButton({ to }) {
  const navigate = useNavigate();
  return (
    <button className='back-btn' onClick={() => navigate(to)}>
      <FiArrowLeft size={30} />
    </button>
  );
}

export default BackButton;
