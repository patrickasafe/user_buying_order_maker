import { NextPage } from "next";

import styles from 'styles/Home.module.css'

import { useSession, signOut } from "next-auth/react";


// TODO: fix this typescript error
const Account: NextPage = () => {
  const { data: session } = useSession({ required: true });

  // if (!session) {
  //   return (
  //     <div className={styles.container}>
  //       <p>You are not Signed in</p>
  //     </div>
  //   );
  // }

  if (session) {
    return (
      <div className={styles.container}><p>Welcome {session.user.name}</p></div>
    )
  }
};

export default Account