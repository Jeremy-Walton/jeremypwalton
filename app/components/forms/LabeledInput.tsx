import FormGroup from "./FormGroup";
import Input from "./Input";
import Label from "./Label";

export type LabeledInputProps = {
  label: string;
  id: string;
  error?: string;
  hint?: string;
  containerProps?: {
    [x: string]: any;
  };
  labelProps?: {
    [x: string]: any;
  };
  inputProps?: {
    [x: string]: any;
  };
}

export default function LabeledInput({
  label,
  id,
  error,
  hint,
  containerProps = {},
  labelProps = {},
  inputProps = {},
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
      <Input id={id} {...inputProps} />
      {renderHint()}
    </FormGroup>
  )
}
