<template>
  <div>カレンダー[{{ type.fuga }}]</div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    type: {
      required: true,
      validator: (value: string) => {
        return ["month", "week", "day"].includes(value);
      }
    }
  }
});
</script>
