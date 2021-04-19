class AddJobSourceToJobInfos < ActiveRecord::Migration[6.0]
  def change
    add_column :job_infos, :job_source, :string
  end
end
