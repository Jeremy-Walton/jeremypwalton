import { useState } from "react";

export type CheckboxProps = {
  id: string;
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  checked?: boolean;
  disabled?: boolean;
}

export default function Checkbox({
  id,
  label,
  onChange,
  className = '',
  checked = false,
  disabled = false,
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setIsChecked(e.target.checked);
    if (onChange) { onChange(e) }
  }

  return (
    <div className={`form__group--checkbox ${className}`}>
      <input id={id} type="checkbox" onChange={handleChange} checked={isChecked} disabled={disabled} />
      <label className='form__label' htmlFor={id}>{label}</label>
    </div>
  )
}
