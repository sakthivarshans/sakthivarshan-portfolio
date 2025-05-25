
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.49.8';
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ResumeRequest {
  name: string;
  email: string;
  company: string;
  purpose: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, purpose, message }: ResumeRequest = await req.json();

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { error: dbError } = await supabase
      .from('resume_requests')
      .insert({
        name,
        email,
        company,
        purpose,
        message
      });

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error('Failed to store resume request');
    }

    // Send notification email to you
    await resend.emails.send({
      from: "Resume Request <onboarding@resend.dev>",
      to: ["email2sakthi.s@gmail.com"],
      subject: `Resume Request from ${name}`,
      html: `
        <h2>New Resume Request</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'Not specified'}</p>
          <p><strong>Purpose:</strong> ${purpose}</p>
          ${message ? `
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 5px; margin: 10px 0;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          ` : ''}
        </div>
        <p><em>Resume has been automatically sent to the requester</em></p>
      `,
    });

    // Send resume to the requester
    await resend.emails.send({
      from: "Sakthivarshan S <onboarding@resend.dev>",
      to: [email],
      subject: "Resume - Sakthivarshan S | AI/ML & IoT Developer",
      html: `
        <h2>Thank you for your interest, ${name}!</h2>
        
        <p>I appreciate your interest in my profile and background. As requested, please find my resume attached to this email.</p>
        
        <div style="background: #f0f8ff; padding: 20px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #007acc;">
          <h3>About Me:</h3>
          <p>I'm a passionate developer specializing in AI/ML, IoT, embedded systems, and robotics. I love turning innovative ideas into real-world solutions and am always excited about new collaboration opportunities.</p>
        </div>

        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <h4>Key Areas of Expertise:</h4>
          <ul>
            <li>Artificial Intelligence & Machine Learning</li>
            <li>IoT & Embedded Systems</li>
            <li>Computer Vision & Image Processing</li>
            <li>Robotics & Hardware Design</li>
            <li>Cloud Computing & DevOps</li>
          </ul>
        </div>

        <p>If you have any questions about my experience or would like to discuss potential opportunities, please don't hesitate to reach out. I'm always open to connecting with like-minded professionals and exploring new projects.</p>

        <div style="border-top: 2px solid #007acc; padding-top: 15px; margin-top: 20px;">
          <p><strong>Contact Information:</strong></p>
          <p>📧 Email: email2sakthi.s@gmail.com</p>
          <p>💼 LinkedIn: https://www.linkedin.com/in/sakthivarshan-s-81aa50291</p>
          <p>🐙 GitHub: https://github.com/sakthivarshans</p>
        </div>

        <p>Thank you again for your interest!</p>
        
        <p>Best regards,<br>Sakthivarshan S</p>
      `,
    });

    console.log("Resume request processed successfully");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-resume-request function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
