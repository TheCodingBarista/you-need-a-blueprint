<template>
  <div class="transaction-container">
    <br>
    <table class="table">
    <tbody>
      <tr>
        <th>Account</th>
        <th>Date</th>
        <th>Payee</th>
        <th>Category</th>
        <th>Memo</th>
        <th>Amount</th>
      </tr>
      <tr v-for="transaction in transactions" v-bind:key="transaction.id">
        <td>{{transaction.account_name}}</td>
        <td>{{transaction.date}}</td>
        <td>{{transaction.payee_name}}</td>
        <td>{{transaction.category_name}}</td>
        <td>{{transaction.memo}}</td>
        <td>{{convertMilliUnitsToCurrencyAmount(transaction.amount).toFixed(2)}}</td>
      </tr>
    </tbody>
    </table>
  </div>
</template>

<script>
// Import utils from YNAB
import {utils} from 'ynab';

export default {
  props: ['transactions'],
  methods: {
    // Now we can make this method available to our template
    // So we can format this milliunits in the correct currency format
    convertMilliUnitsToCurrencyAmount: utils.convertMilliUnitsToCurrencyAmount
  }
}
</script>
