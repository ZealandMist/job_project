class CreateJobInfos < ActiveRecord::Migration[6.0]
  def change
    create_table :job_infos do |t|
      t.string :key
      t.string :job_title
      t.string :company
      t.string :job_url

      t.timestamps null:false
    end
  end
end
