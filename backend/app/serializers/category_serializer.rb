class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :budget

  def budget
    {budget_id: self.object.budget.id, 
     budget_name: self.object.budget.name}
  end
end
