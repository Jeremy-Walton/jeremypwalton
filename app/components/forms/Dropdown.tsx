import FormGroup from "./FormGroup";
import Label from "./Label";

export type LabeledInputProps = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  options?: {
    value: string;
    label: string;
  }[];
  containerProps?: {
    [x: string]: any;
  };
  labelProps?: {
    [x: string]: any;
  };
  selectProps?: {
    [x: string]: any;
  };
}

export default function LabeledInput({
  id,
  label,
  error,
  hint,
  options = [],
  containerProps = {},
  labelProps = {},
  selectProps = {},
}: LabeledInputProps) {
  function renderError() {
    if (!error) { return null }

    return (
      <span className="form__error">
        {error}
      </span>
    )
  }

  function renderHint() {
    if (!hint) { return null }

    return (
      <span className="form__hint">
        {hint}
      </span>
    )
  }

  // TODO:
  // from__input--error should be form__input--error

  return (
    <FormGroup className={error ? 'from__input--error' : ''} {...containerProps}>
      <Label htmlFor={id} {...labelProps}>{label}</Label>
      {renderError()}
      <select id={id} className='form__dropdown' {...selectProps}>
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      {renderHint()}
    </FormGroup>
  )
}
