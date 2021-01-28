class AddTotalNeededToCategories < ActiveRecord::Migration[6.0]
  def change
    add_column :categories, :total_needed, :integer
  end
end
