<template>
  <a :href="link">
    <span :title="title">
      <component :is="src" />
      <span>&nbsp;{{ textField }}</span>
    </span>
  </a>
</template>
<script>
import GithubSVG from "@/components/svg/GithubSVG";
import LocationSVG from "@/components/svg/LocationSVG";
import GithubGistSVG from "@/components/svg/GithubGistSVG";
import GithubRepositoriesSVG from "@/components/svg/GithubRepositoriesSVG";
import GithubFollowersSVG from "@/components/svg/GithubFollowersSVG";
export default {
  name: "icon-text",
  props: {
    textField: [String, Number],
    title: String,
    link: {
      default: "#",
      type: String,
      required: false,
    },
  },
  components: {
    GithubSVG,
    LocationSVG,
    GithubGistSVG,
    GithubRepositoriesSVG,
    GithubFollowersSVG,
  },
  data() {
    return {
      src: null,
      condition: {
        Github: "GithubSVG",
        Location: "LocationSVG",
        Gists: "GithubGistSVG",
        Repositories: "GithubRepositoriesSVG",
        Followers: "GithubFollowersSVG",
      },
    };
  },
  created() {
    this.src = this.condition[this.title];
  },
};
</script>
<style scoped type="scss">
a:link {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
span {
  color: white;
}
</style>
