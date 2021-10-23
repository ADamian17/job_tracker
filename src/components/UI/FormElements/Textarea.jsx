const Textarea = ({ name, error, cols = 30, rows = 6, ...rest }) => (
  <textarea
    className={`share-form__textarea share-form__textarea${error ? '--error' : ''}`}
    name={name}
    id={name}
    cols={cols}
    rows={rows}
    {...rest}></textarea>
);

export default Textarea;
