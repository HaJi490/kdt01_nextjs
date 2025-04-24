import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// 전체 조회
export async function GET() {
  const todos = await prisma.todo.findMany({ orderBy: { id: 'desc' } }); //findMany: 해당 테이블 정보 다 가져옴
  return NextResponse.json(todos);
}

// 추가
export async function POST(req: NextRequest) { // json파일을 NextRequest타입으로 받음
  const { text , completed} = await req.json();

  const todo = await prisma.todo.create({ //create
    data: { text, completed },
  });

  return NextResponse.json(todo, { status: 201 });
}