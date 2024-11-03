'use client'
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";

export default function Songs() {
  const { data: session } = useSession();
  const router = useRouter()
  if (session?.user) {
    router.push("/signin")
  }
  else {
    return (
      <>
        <Songs />
      </>
    )
  }

}
