# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Budget.destroy_all
Category.destroy_all

my_budget = Budget.create({name: "Mel's Budget"})
my_budget.categories.create([{name: "Fun Money"}, {name: "Bills"}])