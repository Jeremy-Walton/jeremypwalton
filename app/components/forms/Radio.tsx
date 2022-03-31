import { useState } from "react";

export type RadioProps = {
  id: string;
  className?: string;
  name: string;
  label: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [x: string]: any;
}

export default function Radio({
  id,
  name,
  label,
  className = '',
  value,
  checked = false,
  disabled = false,
  onChange,
  ...rest
}: RadioProps) {
  const [isChecked, setIsChecked] = useState(checked);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setIsChecked(e.target.checked);
    if (onChange) { onChange(e) }
  }

  return (
    <>
      <input id={id} name={name} type='radio' value={value} checked={isChecked} disabled={disabled} onChange={handleChange} className={`form__radio ${className}`} {...rest} />
      <label className='form__label' htmlFor={id}>{label}</label>
    </>
  )
}
