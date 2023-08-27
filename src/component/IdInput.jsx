import BackButton from './BackButton';

const IdInput = ({ onSubmit: handleSubmitId, value: id, setValue: setId }) => {
  return (
    <form onSubmit={handleSubmitId}>
      <input
        type='text'
        placeholder='아이디'
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <button type='submit' onClick={handleSubmitId}>
        다음
      </button>
    </form>
  );
};

export default IdInput;
