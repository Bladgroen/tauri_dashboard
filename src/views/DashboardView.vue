<template>
  <div class="dashboard">
    <table border="1" cellspacing="0" align="center" class="table">
      <tr>
        <td align="center" class="username" ref="userRef"></td>
        <td align="center" class="timeBox-left" ref="hourRef">
          <b>8:00</b>
        </td>
        <td align="center" class="timeBox-right"></td>
        <td align="center" class="timeBox-left">
          <b>9:00</b>
        </td>
        <td align="center" class="timeBox-right"></td>
        <td align="center" class="timeBox-left">
          <b>10:00</b>
        </td>
        <td align="center" class="timeBox-right"></td>
        <td align="center" class="timeBox-left">
          <b>11:00</b>
        </td>
        <td align="center" class="timeBox-right"></td>

        <td align="center" class="timeBox-left">
          <b>12:00</b>
        </td>
        <td align="center" class="timeBox-right"></td>
        <td align="center" class="timeBox-left">
          <b>13:00</b>
        </td>
        <td align="center" class="timeBox-right"></td>
        <td align="center" class="timeBox-left">
          <b>14:00</b>
        </td>
        <td align="center" class="timeBox-right"></td>
        <td align="center" class="timeBox-left">
          <b>15:00</b>
        </td>
        <td align="center" class="timeBox-right"></td>
        <td align="center" class="timeBox-left">
          <b>16:00</b>
        </td>
        <td align="center" class="timeBox-right"></td>
        <td align="center" class="timeBox-left">
          <b>17:00</b>
        </td>
        <td align="center" class="timeBox-right"></td>
        <td align="center" class="timeBox-left">
          <b>18:00</b>
        </td>
        <td align="center" class="timeBox-right"></td>
      </tr>
      <div
        class="indicatorline"
        v-bind:style="{ left: indicatorPosition + 'px' }"
      ></div>
      <template v-for="tasks in taskdata.data">
        <CTask :username="tasks.username" :task="tasks.tasks" />
      </template>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, reactive } from "vue";
import DashboardLogic from "../logic/DashboardLogic";
import DataClient from "../clients/DataClient";
import CTask from "../components/CTask.vue";

let indicatorPosition = ref(0);

let state = reactive({
  indicatorPosition,
});
const userRef = ref(null);
const hourRef = ref(null);

async function calculatePosition() {
  const userRefValue = userRef.value;

  const hourRefValue = hourRef.value;
  let position = DashboardLogic.initIndicatorPosition(
    hourRefValue.clientWidth * 2
  );
  state.indicatorPosition = userRefValue.clientWidth + position;
}

const taskdata = await DataClient.fetchTasksFromDate();

onMounted(async () => {
  await calculatePosition();
  setInterval(async () => {
    await calculatePosition();
  }, 300000);
});
</script>

<style lang="scss">
.table {
  table-layout: fixed;
  width: 100%;
  overflow: auto;
}

.indicatorline {
  border-right: 2px solid red;
  height: 50%;
  position: absolute;
}

.timeBox-left {
  border-right: none;
}

.timeBox-right {
  border-left: none;
}

.username {
  width: 10%;
  height: 3rem;
}
</style>
