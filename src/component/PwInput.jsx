const PwInput = ({
  onSubmit: handleSubmitPw,
  setValue: setPassword,
  value: password,
}) => {
  return (
    <form onSubmit={handleSubmitPw}>
      <input
        type='password'
        placeholder='비밀번호'
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type='submit' onClick={handleSubmitPw}>
        로그인
      </button>
    </form>
  );
};

export default PwInput;
