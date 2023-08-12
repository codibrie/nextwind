import { Post } from 'contentlayer/generated'
import Link from 'next/link'

export default function PostCard(post: Post) {
  return (
    <Link href={post.url} className='mb-8 block border p-4 rounded'>
      <h2 className='mb-1 text-xl'>{post.title}</h2>
      <p>{post.description}</p>
      <time dateTime={post.date} className='mb-2 block text-xs text-gray-600'>
        {new Intl.DateTimeFormat('es-ES').format(new Date(post.date))}
      </time>
    </Link>
  )
}
