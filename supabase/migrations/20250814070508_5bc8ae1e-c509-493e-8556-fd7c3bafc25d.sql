-- Remove the public read policy for project_enquiries table
DROP POLICY IF EXISTS "Allow reading project enquiries" ON public.project_enquiries;

-- Create admin-only read policy for project_enquiries
CREATE POLICY "Admin only can view project enquiries" 
ON public.project_enquiries 
FOR SELECT 
USING (false);