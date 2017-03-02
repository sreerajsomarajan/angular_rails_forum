class CreateSubPosts < ActiveRecord::Migration[5.0]
  def change
    create_table :sub_posts do |t|
      t.references :main_post, foreign_key: true
      t.references :user, foreign_key: true
      t.text :comments
      t.integer :status

      t.timestamps
    end
    add_index :sub_posts, :status
  end
end
