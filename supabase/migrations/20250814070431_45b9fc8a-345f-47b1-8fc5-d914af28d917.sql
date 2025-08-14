-- Remove the public read access policy for contact submissions
DROP POLICY IF EXISTS "Allow viewing contact submissions" ON public.contact_submissions;

-- Create a more secure admin-only policy for viewing contact submissions
-- This assumes you'll implement authentication later for admin access
CREATE POLICY "Admin only can view contact submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (false); -- Temporarily block all access until proper admin authentication is implemented

-- Keep the existing policy that allows anyone to submit contact forms
-- This is necessary for the contact form functionality to work