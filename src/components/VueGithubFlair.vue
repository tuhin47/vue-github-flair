<template>
  <div
    class="github-flair"
    style="
      box-sizing: border-box;
      line-height: normal;
      display: flex;
      align-items: center;
      width: 210px;
      height: 60px;
      color: rgb(255, 255, 255);
      position: relative;
      border: 2px solid rgb(36, 41, 46);
      background: rgb(36, 41, 46);
      border-radius: 3px;
      padding: 5px 10px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol';
    "
  >
    <avatar-view :profile="profile" />
    <div
      class="info"
      style="
        width: 160px;
        text-align: right;
        font-size: 14px;
        margin-right: -8px;
      "
    >
      <div class="name" style="font-size: 14px">
        <icon-text
            :link="profile.url"
            :text-field="username"
            title="Github"
        />

      </div>
      <div class="meta">
        <icon-text
          :link="'https://github.com/' + username + '?tab=followers'"
          :text-field="profile.followers"
          title="Followers"
        />
        <icon-text
          :link="'https://github.com/' + username + '?tab=repositories'"
          :text-field="profile.repos"
          title="Repositories"
        />
        <icon-text
          :link="'https://gist.github.com/' + username"
          :text-field="profile.public_gists"
          title="Gists"
        />
      </div>
      <div class="location">
        <icon-text :text-field="profile.location" title="Location" />
      </div>
    </div>
  </div>
</template>

<script>
import GithubCardService from "./GithubCardService";
import AvatarView from "@/components/AvatarView";
import IconText from "@/components/IconText";

export default {
  name: "VueGithubFlair",
  components: { IconText, AvatarView },
  props: {
    username: {
      type: String,
    },
  },
  data() {
    return {
      user_name: this.username,
      profile: {},
      repos: [],
      isFoundProfile: false,
      msg: "",
    };
  },
  mounted() {
    if (this.user_name) {
      this.onSubmit();
    }
  },
  methods: {
    onSubmit() {
      if (!!this.user_name && this.user_name.trim() === "") {
        return;
      }

      this.user_name = this.user_name.trim();

      GithubCardService.fetchUsername(this.user_name).then(
        this.getProfileByUsername
      );
      GithubCardService.fetchReposByUsername(this.user_name).then(
        this.getReposByUsername
      );
    },
    getProfileByUsername(data) {
      this.user_name = "";

      if (data.message === "Not Found") {
        this.profile = {};
        this.repos = [];
        this.isFoundProfile = false;
        this.msg = `
				 <h3>Oops !!!</h3>
				 <p>The component couldn't find github username the you were looking for. Try again.</p>
				`;
      } else {
        this.msg = "";
        this.isFoundProfile = true;
        this.profile = {
          name: data.name,
          avatar: data.avatar_url,
          location: data.location,
          url: data.html_url,
          repos: data.public_repos,
          reposUrl: data.html_url + "?tab=repositories",
          followers: data.followers,
          followersUrl: data.html_url + "/followers",
          following: data.following,
          followingUrl: data.html_url + "/following",
          public_gists: data.public_gists,
        };
      }
    },
    getReposByUsername(data) {
      if (data.message === "Not Found") {
        this.profile = {};
        this.repos = [];
        this.isFoundProfile = false;
      } else {
        this.repos = data
          .filter((d) => {
            return d.stargazers_count > 0;
          })
          .sort((a, b) => {
            return a.stargazers_count < b.stargazers_count ? 1 : -1;
          })
          .map((d) => {
            return {
              name: d.name,
              stars: d.stargazers_count,
              language: d.language,
              repoUrl: d.html_url,
            };
          });
      }
    },
    onInput(event) {
      this.user_name = event.target.value;
      this.$emit("input", event.target.value);
    },
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
