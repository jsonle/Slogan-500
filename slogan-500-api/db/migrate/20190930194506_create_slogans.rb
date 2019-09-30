class CreateSlogans < ActiveRecord::Migration[6.0]
  def change
    create_table :slogans do |t|
      t.string :content
      t.references :company, null: false, foreign_key: true

      t.timestamps
    end
  end
end
