import type { NextPage } from 'next'
import styles from 'styles/Home.module.css'

import { signIn, signOut, useSession } from 'next-auth/react'

const Home: NextPage = () => {
  const { data: session, status: loadingSession } = useSession();

  if (loadingSession == "loading") {
    return <p>Loading...</p>
  }

  return (
    <div className={styles.container}>
      {!session && (
        <>
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}

      {session && (
        <>
          <h4>You are logged as: {session.user.name}</h4>
          <div className={styles.boxCenter}>
            <h4>Email: {session.user.email}</h4>
            <br />
            {session.user.image && (
              <span>
                <img src={session.user.image} alt={session.user.name} />
              </span>
            )}
          </div>
          <br />
          <br />
          <button className={styles.primaryButton} onClick={() => signOut()}>
            Sign out
          </button>
        </>
      )
      }
    </div >
  )
}

export default Home
