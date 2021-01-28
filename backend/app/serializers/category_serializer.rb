class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :total_saved, :total_needed

  #def budget
  #  {budget_id: self.object.budget.id, 
  #   budget_name: self.object.budget.name}
 # end
end
