import { prisma } from "@/prisma";

export async function POST(req: Request) {
  const { token } = await req.json();
  const user = await prisma.userTokens.create({
    data: {
      access_token: token,
    },
  })
  return new Response(null, { status: 200 })
}
