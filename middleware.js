import { NextResponse } from 'next/server'
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
 
const redis = new Redis({
  url: process.env.UPSTASH_URL,
  token: process.env.UPSTASH_TOKEN,
});
 
const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(5, "10 s"),
});
 
export default async function middleware(request, event) {
  console.log(request)
  // const ip = request.ip ?? "127.0.0.1";
  const user = request.user ?? "";
  const { success, pending, limit, reset, remaining } = await ratelimit.limit(
    user
  );
  return success
    ? NextResponse.next()
    : NextResponse.redirect(new URL("/blocked", request.url));
}
 
export const config = {
  matcher: "/",
};