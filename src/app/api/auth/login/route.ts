import { NextResponse } from 'next/server';
import { allUsers } from '@/data/dummyData';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const user = allUsers.find(u => u.email === email);

  if (!user) {
    return NextResponse.json(
      { error: 'User not found' },
      { status: 404 }
    );
  }

  if (user.password !== password) {
    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    );
  }

  const {...userWithoutPassword} = user
  return NextResponse.json( userWithoutPassword);
}