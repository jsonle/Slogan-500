class CreateScores < ActiveRecord::Migration[6.0]
  def change
    create_table :scores do |t|
      t.integer :total_points
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
