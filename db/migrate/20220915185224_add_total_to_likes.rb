class AddTotalToLikes < ActiveRecord::Migration[7.0]
  def change
    add_column :post_likes, :total_likes, :integer
  end
end
