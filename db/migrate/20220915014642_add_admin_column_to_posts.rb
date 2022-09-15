class AddAdminColumnToPosts < ActiveRecord::Migration[7.0]
  def change
    add_column :posts, :admin, :boolean, default: false
  end
end
