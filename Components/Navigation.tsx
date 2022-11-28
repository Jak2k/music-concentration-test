import { useSession } from "@supabase/auth-helpers-react";
import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const session = useSession();
  return (
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      <span className={styles.userinfo}>
        {session?.user.email ? (
          <>Hello {session.user.email}!</>
        ) : (
          <>
            <Link href={"/auth"}>Login / Register</Link>
          </>
        )}
      </span>
    </nav>
  );
}
