<script setup>
defineProps({
  number : String
})
</script>

<template>
        <h1>Another component</h1>
        <button  class="increase-btn">Increase</button>
        <input type="text">
        <p>show message : {{ $props.number  }}</p>
</template>