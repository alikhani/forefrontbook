import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import { AddPostMutation, useAddPostMutation } from "../lib/post.graphql";

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
    content.value = "";
  }

  return (
    <Box display={"flex"}>
      <form onSubmit={handleSubmit}>
        <Input maxW="800" type="text" name="content" />
        <Button marginTop={4} type="submit">Add Post</Button>
      </form>
    </Box>
  );
};

export default CreatePost;
