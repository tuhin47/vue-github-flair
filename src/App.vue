<template>
  <div>
    <github-card v-model="username"></github-card>
  </div>
</template>

<script>
import GithubCard from "./components/GithubCard";

export default {
  name: "App",
  data() {
    return {
      username: "",
    };
  },
  components: {
    GithubCard,
  },
};
</script>