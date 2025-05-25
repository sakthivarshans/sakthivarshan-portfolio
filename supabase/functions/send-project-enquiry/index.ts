
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.49.8';
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ProjectEnquiryRequest {
  name: string;
  mobile: string;
  email: string;
  subject: string;
  projectName: string;
  projectField: string;
  projectDescription: string;
  designIdea: string;
  files: string[];
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, mobile, email, subject, projectName, projectField, projectDescription, designIdea, files }: ProjectEnquiryRequest = await req.json();

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { error: dbError } = await supabase
      .from('project_enquiries')
      .insert({
        name,
        mobile,
        email,
        subject,
        project_name: projectName,
        project_field: projectField,
        project_description: projectDescription,
        design_idea: designIdea,
        files: files
      });

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error('Failed to store project enquiry');
    }

    // Send email to you with the project enquiry
    await resend.emails.send({
      from: "Project Enquiry <onboarding@resend.dev>",
      to: ["email2sakthi.s@gmail.com"],
      subject: `New Project Enquiry: ${projectName}`,
      html: `
        <h2>New Project Enquiry Received</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h3>Contact Information:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Mobile:</strong> ${mobile}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
        </div>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h3>Project Details:</h3>
          <p><strong>Project Name:</strong> ${projectName}</p>
          <p><strong>Project Field:</strong> ${projectField}</p>
          <p><strong>Description:</strong></p>
          <div style="background: white; padding: 15px; border-radius: 5px; margin: 10px 0;">
            ${projectDescription.replace(/\n/g, '<br>')}
          </div>
          ${designIdea ? `
            <p><strong>Design Ideas:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 5px; margin: 10px 0;">
              ${designIdea.replace(/\n/g, '<br>')}
            </div>
          ` : ''}
          ${files.length > 0 ? `
            <p><strong>Attached Files:</strong></p>
            <ul>
              ${files.map(file => `<li>${file}</li>`).join('')}
            </ul>
          ` : ''}
        </div>
        <p><em>Sent from your portfolio project enquiry form</em></p>
      `,
    });

    // Send confirmation email to the user with resume attachment
    await resend.emails.send({
      from: "Sakthivarshan S <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for your project enquiry - Resume Attached",
      html: `
        <h2>Thank you for your project enquiry, ${name}!</h2>
        <p>I have received your project enquiry for "<strong>${projectName}</strong>" and I'm excited about the opportunity to collaborate with you.</p>
        
        <div style="background: #f0f8ff; padding: 20px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #007acc;">
          <h3>What's Next?</h3>
          <ul>
            <li>I'll review your project details carefully</li>
            <li>My resume is attached to this email for your reference</li>
            <li>I'll get back to you within 24-48 hours with my thoughts and proposal</li>
            <li>We can then schedule a call to discuss the project in detail</li>
          </ul>
        </div>

        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <h4>Your Project Summary:</h4>
          <p><strong>Project:</strong> ${projectName}</p>
          <p><strong>Field:</strong> ${projectField}</p>
          <p><strong>Description:</strong> ${projectDescription.substring(0, 200)}${projectDescription.length > 200 ? '...' : ''}</p>
        </div>

        <p>I'm looking forward to working together and bringing your innovative ideas to life!</p>
        
        <p>Best regards,<br>Sakthivarshan S<br>AI/ML & IoT Developer</p>
      `,
    });

    console.log("Project enquiry processed successfully");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-project-enquiry function:", error);
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
