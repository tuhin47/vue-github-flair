<template>
  <div
    class="avatar"
    style="
      text-align: center;
      position: relative;
      width: 58px;
      height: 54px;
      margin-left: -9px;
    "
  >
    <a :href="profile.url" target="_blank"
      ><img
        :src="profile.avatar"
        alt="Profile Avatar"
        style="width: 100%; height: 100%; border-radius: 0px"
    /></a>
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
