import type { NextPage } from 'next'

import styles from 'styles/Home.module.css'
import { signOut, useSession } from 'next-auth/react'

//TODO fix this typescript error
const Logout: NextPage = () => {
  const { data: session, status: loadingSession } = useSession();


  if(session) {
    signOut()
    return(
      <div className={styles.container}>
        <h4>Leaving session...</h4>
      </div>
    )
  }

}

export default Logout
