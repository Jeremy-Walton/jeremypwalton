export type InputProps = {
  className?: string;
  [x: string]: any;
}

export default function Input({
  className = '',
  ...rest
}: InputProps) {
  return (
    <input className={`form__input ${className}`} {...rest} />
  )
}
