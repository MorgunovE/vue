<template>
  <div>
    HelloWorld
    <!-- 7 -->
    <button @click="addUser">Add Users</button>
  </div>
</template>

<script>
// 9
import { mapActions } from "vuex";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  // 7-1
  methods: {
    ...mapActions("users", ["addNewUser"]),
    addUser() {
      const newUser = {
        name: "Sanya",
        age: 20,
      };
      this.addNewUser(newUser);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
