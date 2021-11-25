import {
    AddPostMutation, useAddPostMutation
} from '../lib/post.graphql'
  
const CreatePost = () => {
    const [addPostMutation, { data, loading, error }] = useAddPostMutation();

    async function handleSubmit(event) {
        event.preventDefault();

        const content = event.currentTarget.elements.content;
        await addPostMutation({
            variables: {
              content: content.value,
            },
        });
        content.value = '';
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="content" />
                <button type="submit">Add Post</button>
            </form>
        </>
    )
}

export default CreatePost