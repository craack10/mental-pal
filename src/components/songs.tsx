import { signIn } from "@/auth"
import { Card, CardContent } from "./ui/card"

export default function Songs({ song }: any) {
  return (
    <Card>
      <CardContent>
        {song}
      </CardContent>
    </Card>
  )
}
