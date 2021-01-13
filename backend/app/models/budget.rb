class Budget < ApplicationRecord
    require 'pry'
    require 'ynab'

    has_many :categories

def self.test
    #access_token = ENV['YNAB_ACCESS_TOKEN']
    access_token = "4278b88d8fae72ee0881bcb88434b0c631f09fea5944b316415ca448a7d496ee"

    ynab = YNAB::API.new(access_token)

begin
  puts 'Fetching budgets...'

  budget_response = ynab.budgets.get_budgets
  budgets = budget_response.data.budgets

  puts '==========='
  puts 'BUDGET LIST'
  puts '==========='

  budgets.each do |budget|
    puts "[id: #{budget.id}, name: #{budget.name}]"
  end
    rescue YNAB::ApiError => e
  puts "ERROR: id=#{e.id}; name=#{e.name}; detail: #{e.detail}"
    end
    binding.pry

end
      

end
