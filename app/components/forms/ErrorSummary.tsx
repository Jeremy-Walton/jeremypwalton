export type ErrorSummaryProps = {
  title: string;
  errors: string[];
}

export default function ErrorSummary({
  title,
  errors
}: ErrorSummaryProps) {
  if (!errors) { return null }

  return (
    <div className='form__error-summary'>
      <h2>{title}</h2>
      <ul>
        {errors.map((error, i) => <li key={i}>{error}</li>)}
      </ul>
    </div>
  )
}
