<template>
  <div class="budgets container">
    <h2>Select A Budget</h2>
    <br>
    <div v-for="budget in budgets" class="row">
      <br>
      <button @click="selectBudget(budget.id, $event)">
        {{budget.name}}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['budgets', 'selectBudget']
}
</script>
