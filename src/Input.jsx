export default function Input({
  label,
  type = "text",
  name,
  className,
  defaultValue,
  onChange,
  placeholder,
  isTextarea = false,
}) {
  return (
    <>
      <label>{label}</label>
      {isTextarea ? (
        <textarea
          name={name}
          className={className}
          defaultValue={defaultValue}
          onChange={onChange}
          placeholder={placeholder}
          rows={5}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className={className}
          defaultValue={defaultValue}
          onChange={onChange}
        />
      )}
    </>
  );
}
