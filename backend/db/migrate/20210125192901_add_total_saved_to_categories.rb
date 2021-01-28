class AddTotalSavedToCategories < ActiveRecord::Migration[6.0]
  def change
    add_column :categories, :total_saved, :integer
  end
end
