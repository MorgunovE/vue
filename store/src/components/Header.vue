<template>
  <!-- 1 -->
  <div>
    Header
    <!-- 6-2 -->
    {{ usersList }}
  </div>
</template>

<script>
// 6
import { mapGetters } from "vuex";

export default {
  name: "Header",
  computed: {
    // 6-1
    ...mapGetters("users", ["usersList"]),
  },
};
</script>
