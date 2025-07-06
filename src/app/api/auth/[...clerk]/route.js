import { handleAuth } from '@clerk/nextjs/server';

export const GET = handleAuth();
export const POST = handleAuth();