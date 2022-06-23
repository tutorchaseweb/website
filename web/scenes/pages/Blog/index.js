import { BlogCard } from './BlogCard'

export const BlogPage = ({ posts }) => {
  return (
    <section>
      <div className="container">
        <h1>Blog</h1>
        <div className="wrapper">
          {posts.map((post) => {
            return <BlogCard key={post._id} article={post} />
          })}
        </div>
      </div>
    </section>
  )
}

export default BlogPage
