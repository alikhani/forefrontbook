import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/client";
import {
  ViewerQuery,
  useViewerQuery,
  ViewerDocument,
} from "../lib/viewer.graphql";
import { Box, Center, VStack } from "@chakra-ui/react";
import CreatePost from "../components/create-post";
import Posts from "../components/feed";
import { TopNavigation } from "../components/topnav";
import { LoadingSpinner } from "../components/loading-spinner";
import styles from "./styles.module.css";

const Index = () => {
  const router = useRouter();
  const [session, sLoading] = useSession();
  // const { data, loading, error } = useViewerQuery()
  // const viewer = data?.viewer
  // const shouldRedirect = !(loading || error || viewer)

  // useEffect(() => {
  //   if (shouldRedirect) {
  //     router.push('/signin')
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [shouldRedirect])

  // if (error) {
  //   return <p>{error.message}</p>
  // }
  console.log({ session });

  if (sLoading) {
    return (
      <Box p={8} display={{ md: "flex" }}>
        <LoadingSpinner />
      </Box>
    );
  }

  if (session) {
    return (
      <>
        <TopNavigation />
        <Box id="app_content" p={4}>
          <VStack>
            <CreatePost />
            <Posts />
          </VStack>
        </Box>
      </>
    );
  }

  return (
    <Box>
      <Center>
        <Link href="/api/auth/signin">
          <a>Log in</a>
        </Link>
      </Center>
    </Box>
  );
};

export default Index;
