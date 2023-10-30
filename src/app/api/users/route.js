import { NextResponse } from "next/server";
import { async } from './route';
//route handlers
export async function GET() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  return NextResponse.json({
    data: users
  });
}

export async function POST(request) {
  const data = await request.json()
  console.log('====================================');
  console.log(data);
  console.log('====================================');
  return NextResponse.json({ msg: "Creando datos" });
}
export function PUT() {
  return NextResponse.json({ msg: "Actualizando datos" });
}
export function DELETE() {
  return NextResponse.json({ msg: "Eliminando datos" });
}
