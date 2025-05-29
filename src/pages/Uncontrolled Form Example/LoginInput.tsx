interface LoginInputProps {
  id: string;
  label: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: React.RefObject<HTMLInputElement | null>;
  endAdornment?: React.ReactNode;
  name : string
}

const LoginInput = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  endAdornment = null,
  name,
  ref,
}: LoginInputProps) => {
  return (
    <div className="form-input">
      <input
        type={type}
        value={value}
        ref={ref}
        onChange={onChange}
        id={id}
        placeholder=" "
        name={name}
        required
      />
      <label htmlFor={id}>{label}</label>
      {endAdornment ? endAdornment : null}
    </div>
  );
};

export default LoginInput;