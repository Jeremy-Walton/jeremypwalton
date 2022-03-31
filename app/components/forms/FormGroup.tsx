export type FormgroupProps = {
  className?: string;
  children?: React.ReactNode;
  [x: string]: any;
}

export default function FormGroup({
  className = '',
  children = null,
  ...rest
}: FormgroupProps) {
  return (
    <div className={`form__group ${className}`} {...rest}>
      {children}
    </div>
  )
}
