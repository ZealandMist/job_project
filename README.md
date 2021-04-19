# README

1. Find away to host JSON file so it a can be parsed.
2. Once it's able to be parsed use logic to update the job_source column on table
   a. create a task to parse json check to see if the root_domain is contained in the job_url
   if it is update the job_source to name from json 
   b. if company contains name update job_source to say company website
   c. else update job_source to say Unknown.
3. Create homepage that has a card for each JSON object, Company Websites, and Unknown sources
4. When you click be able to open a second page that querys and shows a list of all the jobs for the appropriate source
   a. the list should be a table that lists the id, company name, job title, and url
