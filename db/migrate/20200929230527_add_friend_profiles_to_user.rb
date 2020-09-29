class AddFriendProfilesToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :friend_profiles, :text
  end
end
