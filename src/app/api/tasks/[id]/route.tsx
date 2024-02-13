import { NextResponse } from "next/server";
import { NextApiRequest } from "next";

type Params = {
  id: number;
};

export function GET(request: NextApiRequest, { params }: { params: Params }) {
  return NextResponse.json("Getting task" + params.id);
}

export function PUT(request: NextApiRequest, { params }: { params: Params }) {
  return NextResponse.json("Updating task" + params.id);
}

export function DELETE(
  request: NextApiRequest,
  { params }: { params: Params }
) {
  return NextResponse.json("Deleting task" + params.id);
}
