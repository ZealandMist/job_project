namespace :job_project do
  desc "TODO"
  task add_job_source: :environment do
    require 'json'

    data = JSON.parse(File.read('public/jobBoards.json'))
    
    job_array = data['job_boards']

    root = job_array.map {|item| item['root_domain']}
  
    if JobInfo.job_url.includes? root
    update JobInfo.job_source
    end
  end

end
