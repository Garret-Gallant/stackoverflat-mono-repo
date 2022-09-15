# db/migrate/20220912222405_add_confirmation_and_password_columns_to_users.rb
class AddConfirmationAndPasswordColumnsToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :confirmed_at, :datetime
  end
end
