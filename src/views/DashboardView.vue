<template>
  <div class="dashboard">
    <table border="1" cellspacing="0" align="center" class="table">
      <tr>
        <td align="center" height="50" width="100"></td>
        <td
          align="center"
          height="50"
          width="50"
          class="timeBox-left"
          ref="hourRef"
        >
          <b>8:00</b>
        </td>
        <td align="center" height="50" width="50" class="timeBox-right"></td>
        <td align="center" height="50" width="50" class="timeBox-left">
          <b>9:00</b>
        </td>
        <td align="center" height="50" width="50" class="timeBox-right"></td>
        <td align="center" height="50" width="50" class="timeBox-left">
          <b>10:00</b>
        </td>
        <td align="center" height="50" width="50" class="timeBox-right"></td>
        <td align="center" height="50" width="50" class="timeBox-left">
          <b>11:00</b>
        </td>
        <td align="center" height="50" width="50" class="timeBox-right"></td>
        <!-- TODO rowspan = aantal users && 12u bovenaan krijgen -->
        <td
          vertical-align="top"
          rowspan="3"
          width="50"
          class="timeBox-left lunchTime"
        >
          <b>12:00</b>
        </td>
        <td align="center" height="50" width="50" class="timeBox-right"></td>
        <td align="center" height="50" width="50" class="timeBox-left">
          <b>13:00</b>
        </td>
        <td align="center" height="50" width="50" class="timeBox-right"></td>
        <td align="center" height="50" width="50" class="timeBox-left">
          <b>14:00</b>
        </td>
        <td align="center" height="50" width="50" class="timeBox-right"></td>
        <td align="center" height="50" width="50" class="timeBox-left">
          <b>15:00</b>
        </td>
        <td align="center" height="50" width="50" class="timeBox-right"></td>
        <td align="center" height="50" width="50" class="timeBox-left">
          <b>16:00</b>
        </td>
        <td align="center" height="50" width="50" class="timeBox-right"></td>
        <td align="center" height="50" width="50" class="timeBox-left">
          <b>17:00</b>
        </td>
        <td align="center" height="50" width="50" class="timeBox-right"></td>
        <td align="center" height="50" width="50" class="timeBox-left">
          <b>18:00</b>
        </td>
        <td align="center" height="50" width="50" class="timeBox-right"></td>
      </tr>
      <div
        class="indicatorline"
        v-bind:style="{ left: indicatorPosition + 'px' }"
      ></div>
      <tr>
        <td align="center" ref="userRef" height="50">
          <b>Vincent</b>
        </td>
        <td align="center" colspan="1" height="50" ref="taskref">task</td>
        <p>{{ state.indicatorPosition }}</p>
        <td align="center" colspan="1" height="50">task</td>
        <td align="center" colspan="1" height="50">task</td>
        <td align="center" colspan="1" height="50">task</td>
        <td align="center" colspan="1" height="50">task</td>
        <td align="center" colspan="1" height="50">task</td>
        <td align="center" colspan="1" height="50">task</td>
        <td align="center" colspan="1" height="50">task</td>
        <td align="center" colspan="1" height="50">task</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, reactive } from "vue";
import DashboardLogic from "../logic/DashboardLogic";

let indicatorPosition = ref(0);
let state = reactive({
  indicatorPosition,
});
const userRef = ref(null);
const hourRef = ref(null);
//TODO elke 5min opnieuw
async function testfunction() {
  const userRefValue = userRef.value;
  const hourRefValue = hourRef.value;
  let position = DashboardLogic.initIndicatorPosition(hourRefValue.clientWidth);
  state.indicatorPosition = userRefValue.clientWidth + position;
}

console.log("init", DashboardLogic.initIndicatorPosition(50));

onMounted(async () => {
  await testfunction();
  console.log(state.indicatorPosition);
});
</script>

<style lang="scss">
.table {
  width: 100%;
  overflow: auto;
}

.indicatorline {
  border-right: 2px solid red;
  height: 50%;
  position: absolute;
}
</style>
