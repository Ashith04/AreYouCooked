import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export async function POST(request) {
  const { endingId } = await request.json();

  if (!endingId) {
    return Response.json({ error: "No endingId provided" }, { status: 400 });
  }

  const key = `ending:${endingId}`;
  const count = await redis.incr(key);

  return Response.json({ count });
}