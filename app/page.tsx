import PostCard from '@/components/PostCard'
import { allPosts } from '@/contentlayer/generated'

export default function Page() {
  const posts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className='flex flex-col gap-4 py-4'>
      <h1 className='text-2xl'>Welcome!</h1>
      <p>
        TypeScript base project with Next.JS as React Framework, Supabase with PostgreSQL as DataBase, Tailwind CSS as
        Style Framework, and Zustand for State Management.
      </p>
      <div className='flex flex-col gap-4 max-w-xl py-8'>
        <h2>MDX posts example</h2>

        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  )
}
