export type CardProps = {
  padded?: boolean;
  className?: string;
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  headerProps?: {
    className?: string;
    [x: string]: any;
  };
  bodyProps?: {
    className?: string;
    [x: string]: any;
  };
  footerProps?: {
    className?: string;
    [x: string]: any;
  };
  children?: React.ReactNode;
  cardPadding?: string;
}

export default function Card({
  padded = false,
  className = '',
  header = null,
  body = null,
  footer = null,
  headerProps = {},
  bodyProps = {},
  footerProps = {},
  cardPadding,
  children = null
}: CardProps) {
  function renderHeader() {
    if (!header) { return null }

    const { className: headerClassName, ...remainingHeaderProps } = headerProps;
    return (
      <div className={`card__header ${headerClassName}`} {...remainingHeaderProps}>
        {header}
      </div>
    )
  }

  function renderBody() {
    if (!body) { return null }

    const { className: bodyClassName, ...remainingBodyProps } = bodyProps;
    return (
      <div className={`card__body ${bodyClassName}`} {...remainingBodyProps}>
        {body}
      </div>
    )
  }

  function renderFooter() {
    if (!footer) { return null }

    const { className: footerClassName, ...remainingFooterProps } = footerProps;
    return (
      <div className={`card__footer ${footerClassName}`} {...remainingFooterProps}>
        {footer}
      </div>
    )
  }

  const paddedClass = padded ? 'card--padded' : '';

  const cssVariablesOverride: any = {} as React.CSSProperties;
  if (cardPadding) {
    cssVariablesOverride['--rms-card-padding'] = cardPadding;
  }

  return (
    <div className={`card ${paddedClass} ${className}`} style={cssVariablesOverride}>
      {renderHeader()}
      {renderBody()}
      {renderFooter()}
      {children}
    </div>
  )
}
