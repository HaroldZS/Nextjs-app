import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

type Params = {
  id: number;
};

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  const task = await prisma.task.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json(task);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Params }
) {
  const data = await request.json();

  const updatedTask = await prisma.task.update({
    where: {
      id: Number(params.id),
    },
    data: data,
  });

  return NextResponse.json(updatedTask);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Params }
) {
  const removedTask = await prisma.task.delete({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json(removedTask);
}
