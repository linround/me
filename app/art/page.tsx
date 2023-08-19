import css from './css.module.css'
export const metadata = {
  title: 'Art',
}
export default function page() {
  return (
    <div className={css.container}>
        <iframe width="640" height="360" frameBorder="0"
                src="https://www.shadertoy.com/embed/mtByWc?gui=true&t=10&paused=true&muted=false"
                allowFullScreen></iframe>
        <iframe width="640" height="360" frameBorder="0"
                src="https://www.shadertoy.com/embed/dtfyRl?gui=true&t=10&paused=true&muted=false"
                allowFullScreen></iframe>
        <iframe width="640" height="360" frameBorder="0"
                src="https://www.shadertoy.com/embed/DlSyDW?gui=true&t=10&paused=true&muted=false"
                allowFullScreen></iframe>
    </div>
  )
}
