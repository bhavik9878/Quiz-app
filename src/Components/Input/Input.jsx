const Input = ({ type, name, checked, onChange, label }) => {
  return (
    <>
      <label>
        <input type={type} name={name} checked={checked} onChange={onChange} />
        {label}
      </label>
    </>
  );
};

export default Input;
