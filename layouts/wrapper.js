export default function Wrapper ({
  width = 'lg',
  children
}) {
  const classes = `wrapper wrapper-${width.toLowerCase()}`

  return (
    <>
      <div className={classes}>{children}</div>
    </>
  )
}
