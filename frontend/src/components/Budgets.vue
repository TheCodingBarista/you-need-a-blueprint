<template>
  <div class="budgets container">
    <h3>Select A Budget</h3>
    <br>
    <div v-for="budget in budgets" class="row">
      <br>
      <a href="#" @click="selectBudget(budget.id, $event)">
        {{budget.name}}
      </a>
    </div>

  </div>
</template>

<script>
export default {
  props: ['budgets', 'selectBudget']
}
</script>
