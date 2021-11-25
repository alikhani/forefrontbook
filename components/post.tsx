import { Box, Container, HStack, Text } from "@chakra-ui/layout";
import Image from "next/image";

const Post = ({ post }) => {
  console.log({ post });
  return (
    <Container border={"1px solid white"} m={1} p={2}>
      <HStack>
        <Box minW={100} className="post-header">
          <HStack>
            {post.author?.image && (
              <img
                alt={post.author?.name}
                src={post.author?.image}
                width={20}
                height={20}
              />
            )}
            <Text>{post.author?.name}</Text>
          </HStack>
        </Box>
        <Box className="post-body">{post.content}</Box>
      </HStack>
    </Container>
  );
};

export default Post;
