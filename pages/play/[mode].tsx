import Link from "next/link";
import { useRouter } from "next/router";

export default function Play() {
  const router = useRouter();
  const { mode } = router.query;
  return (
    <>
      <h2>Play {mode}</h2>
    </>
  );
}
