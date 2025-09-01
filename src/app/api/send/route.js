import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(request) {
  try {
    const { email, subject, message } = await request.json();
    
    console.log('Received data:', { email, subject, message });
    
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ["loomaeko@gmail.com"],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
          <p>From: {email}</p>
        </>
      )
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ error }, { status: 500 });
    }

    console.log('Email sent successfully:', data);
    return Response.json({ message: 'Email sent successfully', data }, { status: 200 });
    
  } catch (error) {
    console.error('API route error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}