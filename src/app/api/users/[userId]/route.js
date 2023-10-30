import { NextResponse } from "next/server"

export const GET = async (request, { params }) => {
  const urlParams = new URL(request.url)
  const { searchParams } = urlParams
  console.log('====================================');
  console.log(urlParams, searchParams);
  console.log('====================================');
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
  const user = await res.json();
  return NextResponse.json({
    data: user,
  });

}