<template>
  <div class="avatar">
    <a :href="profile.url" target="_blank">
      <span :title="profile.title">
        <img :src="profile.avatar" :alt="profile.title" /></span
    ></a>
  </div>
</template>
<script>
export default {
  name: "avatar-view",
  props: {
    profile: {
      required: true,
      type: Object,
    },
  },
};
</script>
<style scoped>
.avatar {
  text-align: center;
  width: 30%;
  position: relative;
}
.avatar a img {
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
}
</style>
