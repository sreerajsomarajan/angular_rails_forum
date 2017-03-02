class CreateMainPosts < ActiveRecord::Migration[5.0]
  def change
    create_table :main_posts do |t|
      t.string :title
      t.string :description
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
