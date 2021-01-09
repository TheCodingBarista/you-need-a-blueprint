class BudgetSerializer < ActiveModel::Serializer
  attributes :id, :name, :categories
  def categories 
    self.object.categories.map do |category|
      {name: category.name}
    end 
  end
end
