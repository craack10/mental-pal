import { signIn } from "@/auth"
import { Button } from "@/components/ui/button"

export default function SignIn() {
  return (
    <form
      className="h-svh w-svw flex flex-col items-center justify-center"
      action={async () => {
        "use server"
        await signIn("spotify", { redirectTo: "/songs" })
      }}
    >
      <Button type='submit'>Connect with Spotify</Button>
    </form >
  )
}
