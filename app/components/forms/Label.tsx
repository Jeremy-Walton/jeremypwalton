export type LabelProps = {
  className?: string;
  children?: React.ReactNode;
  [x: string]: any;
}

export default function Label({
  className = '',
  children = null,
  ...rest
}: LabelProps) {
  return (
    <label className={`form__label ${className}`} {...rest}>
      {children}
    </label>
  )
}
