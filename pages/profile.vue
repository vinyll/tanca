<template>
  <div>
    <van-cell-group>
      <van-cell title="Email" value="user.email" />
      <van-cell title="Password" value="********" />
      <van-cell title="Remaining credit" value="`${user.credit}${$config.currency.symbol}`" />
    </van-cell-group>

    <content-title>History</content-title>
    <van-cell-group>
      <van-cell title="date" value="`${(transaction.type === 'withdrawal') ? '+' : '-'}${transaction.edge.amount}${$config.currency.symbol}`" />
    </van-cell-group>
  </div>
</template>

<script setup>
  definePageMeta({ title: 'Mon compte' })
</script>
