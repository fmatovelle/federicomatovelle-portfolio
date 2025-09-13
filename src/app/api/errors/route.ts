import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const errorData = await request.json();
    
    // Add server-side information
    const enrichedError = {
      ...errorData,
      serverTimestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown',
      referer: request.headers.get('referer') || 'unknown',
    };

    // Log to server console (in production, use proper logging service)
    console.error('Client-side error reported:', enrichedError);

    // In production, send to monitoring service like Sentry, LogRocket, etc.
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to external logging service
      try {
        // await sendToLogService(enrichedError);
        
        // Or save to database
        // await saveErrorToDatabase(enrichedError);
        
        // Or send to Slack/Discord webhook
        if (process.env.ERROR_WEBHOOK_URL && enrichedError.fatal) {
          await fetch(process.env.ERROR_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              text: `🚨 Critical Error in Portfolio: ${enrichedError.message}`,
              attachments: [{
                color: 'danger',
                fields: [
                  { title: 'Error', value: enrichedError.message, short: false },
                  { title: 'URL', value: enrichedError.url, short: true },
                  { title: 'User Agent', value: enrichedError.userAgent.substring(0, 100), short: false },
                  { title: 'Timestamp', value: enrichedError.serverTimestamp, short: true },
                ]
              }]
            })
          });
        }
      } catch (loggingError) {
        console.error('Failed to send error to monitoring service:', loggingError);
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error in error reporting endpoint:', error);
    return NextResponse.json({ error: 'Failed to log error' }, { status: 500 });
  }
}