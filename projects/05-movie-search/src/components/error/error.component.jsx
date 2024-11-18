import './error.component.css'
export function Error({ errors }) {
  return <section>{errors && errors.map((e, i) => <p key={i}>{e}</p>)}</section>
}
