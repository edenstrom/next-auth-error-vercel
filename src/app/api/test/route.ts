import { auth } from "../../../auth";
import { NextResponse } from "next/server";

export const runtime = "edge";

const handler = auth(async (req) => {
  const session = req.auth;

  return NextResponse.json(session);
});

export const GET = handler;
export const POST = handler;
