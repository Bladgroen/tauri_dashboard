<template>
  <div class="dashboard">
    <table border="5" cellspacing="0" align="center" class="table">
      <TimeSlots />
      <tr>
        <td align="center" height="50">
          <b>Vincent</b>
        </td>
        <td align="center" colspan="1" height="50">task</td>
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
import TimeSlots from "../components/TimeSlots.vue";
</script>

<style lang="scss">
.table {
  width: 100%;
}
.dashboard {
}
.testje {
  border-right: none;
}
.testje2 {
  border-left: none;
}
.time_indicator {
  display: flex;

  &__userslot {
    width: 9000px;
  }
}
</style>
