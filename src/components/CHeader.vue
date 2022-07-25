<template>
  <div></div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";

let currentDate = ref("");
let state = reactive({
  currentDate,
});

const options = {
  weekday: "short",
  year: "numeric",
  day: "numeric",
  month: "long",
  hour: "numeric",
  minute: "numeric",
};

//TODO per minuut laten afgaan & de "om" weglaten
setInterval(() => {
  let today = new Date();
  //let exactMinute = 60000 - (today.getTime() % 6000)
  state.currentDate = today.toLocaleDateString("nl", options).replace(/,/g, "");
});
</script>

<style lang=""></style>
