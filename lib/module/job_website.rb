require 'json'

module WebsiteBreakdown
  website_info = JSON.parse(File.open('jobBoards.json'))

  website_info['job_boards'].each 
  company = website_info['job_boards']['name']
  rating = website_info['job_boards']['rating']
  domain = website_info['job_boards']['root_domain']
  logo = website_info['job_boards']['logo_file']
  short_description = website_info['job_boards']['description']
end