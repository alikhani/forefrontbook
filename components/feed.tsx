import { usePostQuery } from '../lib/post.graphql'

const Feed = () => {
	const { data: { post } } = usePostQuery()
    if (post) {
        return <div>{post.map(p => <p>{p.content}</p>)}</div>
    }
    return <div>loading</div>
}

export default Feed