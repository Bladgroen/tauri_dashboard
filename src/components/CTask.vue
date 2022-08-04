<template>
  <tr>
    <td align="center" class="username">
      <b>{{ username }}</b>
    </td>
    <template v-for="task in sortedTasks">
      <td align="center" :colspan="task.duration">
        {{ task.startTime }}
      </td>
    </template>
  </tr>
</template>

<script lang="ts" setup>
import DashboardLogic from "../logic/DashboardLogic";

let props = defineProps({
  username: {
    type: String,
    required: true,
  },
  task: {
    type: Array,
    required: true,
  },
});

let sortedTasks = DashboardLogic.addMissingTasks(props.task);

for (let i = 1; i < sortedTasks.length; i++)
  for (let j = 0; j < i; j++) {
    if (sortedTasks[i].startTime < sortedTasks[j].startTime) {
      let x = sortedTasks[i].startTime;

      sortedTasks[i].startTime = sortedTasks[j].startTime;
      sortedTasks[j].startTime = x;
    }
  }
console.log(sortedTasks);
</script>

<style lang="scss">
.username {
  width: 10%;
  height: 3rem;
}
</style>
