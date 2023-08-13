import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer/hooks'
import type { MDXComponents } from 'mdx/types'

import Link from 'next/link'

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
}


export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) notFound()

  return { title: post.title }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) notFound()

  const MDXContent = useMDXComponent(post.body.code)

  return (
    <article className='mx-auto max-w-xl py-4'>
      <div className='mb-4 text-center'>
        <time dateTime={post.date} className='mb-1 text-xs text-gray-600'>
          {new Intl.DateTimeFormat('en-US').format(new Date(post.date))}
        </time>
        <h1 className='text-3xl font-bold'>{post.title}</h1>
        <p className='mt-2'>{post.author}</p>
      </div>
      <MDXContent components={mdxComponents} />
    </article>
  )
}

export default PostLayout
