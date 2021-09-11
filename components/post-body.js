export default function PostBody ({ content }) {
  return (
    <div className='post-body'>
      <div
        className='post-body__content'
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
