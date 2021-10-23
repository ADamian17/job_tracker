const Input = ({ name, error, ...rest }) => (
  <input
    type="text"
    name={name}
    {...rest}
    className={`share-form__input share-form__input${error ? '--error' : ''}`} />
);

export default Input;
