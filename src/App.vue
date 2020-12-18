<template>
  <div>
<!--    <VueGithubFlair :username="username"></VueGithubFlair>-->
<!--    <VueGithubFlair username="suaas21"></VueGithubFlair>-->
    <VueGithubFlair username="Maxyee"></VueGithubFlair>
  </div>
</template>

<script>
import VueGithubFlair from "@/components/VueGithubFlair";

export default {
  name: "App",
  data() {
    return {
      username: "tuhin47",
    };
  },
  components: {
    VueGithubFlair,
  },
};
</script>
