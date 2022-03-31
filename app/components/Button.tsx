export type ButtonProps = {
  color?: ('primary' | 'secondary' | 'tertiary');
  size?: ('small' | 'medium' | 'large');
  outline?: boolean;
  pill?: boolean;
  active?: boolean;
  minMobileHeight?: number;
  className?: string;
  children?: React.ReactNode;
}

const DEFAULT_SIZE = 'medium';

export default function Button({
  color = 'primary',
  size = DEFAULT_SIZE,
  outline = false,
  pill = false,
  active = false,
  className = '',
  minMobileHeight,
  children,
  ...rest
}: ButtonProps) {
  const outlineClass = outline ? 'btn--outline' : ''
  const pillClass = pill ? 'btn--pill' : ''
  const activeClass = active ? 'btn--active' : ''
  const sizeClass = size !== DEFAULT_SIZE ? `btn--${size}` : ''

  const cssVariablesOverride: any = {} as React.CSSProperties;
  if (minMobileHeight) {
    cssVariablesOverride['--rms-mobile-min-height'] = `${minMobileHeight}px`
  }

  return (
    <button
      style={cssVariablesOverride}
      className={`btn btn--${color} ${sizeClass} ${outlineClass} ${pillClass} ${activeClass} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
