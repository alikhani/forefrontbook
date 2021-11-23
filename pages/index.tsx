import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/client';
import {
  ViewerQuery,
  useViewerQuery,
  ViewerDocument,
} from '../lib/viewer.graphql'
import Posts from '../components/feed';

const Index = () => {
  const router = useRouter()
  const [session, sLoading] = useSession();
  const { data, loading, error } = useViewerQuery()
  const viewer = data?.viewer
  const shouldRedirect = !(loading || error || viewer)

  // useEffect(() => {
  //   if (shouldRedirect) {
  //     router.push('/signin')
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [shouldRedirect])

  if (error) {
    return <p>{error.message}</p>
  }

  if (viewer) {
    return (
      <div>
        You're signed in as {viewer.name} goto{' '}
        <Link href="/about">
          <a>about</a>
        </Link>{' '}
        page. or{' '}
        <button onClick={() => signOut()}>
          <a>Log out</a>
        </button>
        <Posts />
      </div>
    )
  }

  return (
    <div>
      <Link href="/api/auth/signin">
        <a>Log in</a>
      </Link>
    </div>
  )
}

export default Index
