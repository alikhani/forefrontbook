import Image from 'next/image'

const Post = ({ post }) => {
    console.log({post})
    return (
      <div>
          <div className="post-header">
          {post.author?.image && <img alt={post.author?.name} src={post.author?.image} width={20} height={20} />}
              <p>{post.author?.name}</p>
          </div>
          <div className="post-body">{post.content}</div>
      </div>
    )
  }
  
  export default Post