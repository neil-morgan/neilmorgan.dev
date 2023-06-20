import { NextRequest } from "next/server";
import { initializeMongoDB } from "@/lib/mongodb";
import { serverHandler } from "@/lib/apollo/server";

initializeMongoDB();

export const GET = async (request: NextRequest) => serverHandler(request);
export const POST = async (request: NextRequest) => serverHandler(request);
