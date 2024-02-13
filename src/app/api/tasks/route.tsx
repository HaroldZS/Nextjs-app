import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json("Reciving tasks!");
}

export function POST() {
  return NextResponse.json("Creating tasks!");
}
