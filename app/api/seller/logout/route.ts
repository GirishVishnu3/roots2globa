import { NextRequest, NextResponse } from 'next/server';

// Store active sessions (in production, use Redis or database)
// This should match the one in login route
const activeSessions = new Map<string, { expiresAt: number }>();

export async function POST(request: NextRequest) {
  try {
    const sessionToken = request.cookies.get('seller-session');
    
    if (sessionToken) {
      // Remove session from active sessions
      activeSessions.delete(sessionToken.value);
    }

    // Create response and clear cookie
    const response = NextResponse.json(
      { success: true },
      { status: 200 }
    );

    // Clear session cookie
    response.cookies.delete('seller-session', {
      path: '/',
    });

    return response;
  } catch (error: any) {
    console.error('Seller logout error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to logout' },
      { status: 500 }
    );
  }
}

