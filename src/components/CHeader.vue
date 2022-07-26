<template>
  <div>
    <p>{{ state.currentDate }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onBeforeUnmount } from "vue";

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
let calculateMinute = 60000 - (new Date().getTime() % 60000);
function formatDate() {
  let today = new Date();

  state.currentDate = today
    .toLocaleDateString("nl", options)
    .replace(/,|om/g, "");
}
formatDate();

setTimeout(function () {
  setInterval(formatDate, 60000);
  formatDate();
}, calculateMinute);

// ! Geeft unexpected token error
// onBeforeUnmount(() => {
//   clearInterval()
// }),
</script>

<style lang=""></style>
