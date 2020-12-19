<template>
  <div class="github-flair">
    <avatar-view :profile="profile" />
    <div class="info">
      <div class="row">
        <icon-text :link="profile.url" :text-field="username" title="Github" />
      </div>
      <div class="row">
        <span>
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
        </span>
      </div>
      <div class="row">
        <icon-text :text-field="profile.location" title="Location" />
      </div>
    </div>
  </div>
</template>

<script>
// import GithubCardService from "./GithubCardService";
import AvatarView from "@/components/AvatarView";
import IconText from "@/components/IconText";

export default {
  name: "VueGithubFlair",
  components: { IconText, AvatarView },
  props: {
    username: {
      type: String,
      default: "tuhin47",
      required: true,
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
    fetchUsername(username) {
      return new Promise(function (resolve) {
        fetch(`https://api.github.com/users/${username}`)
            .then((res) => res.json())
            .then((data) => {
              resolve(data);
            });
      });
    },
    onSubmit() {
      if (!!this.user_name && this.user_name.trim() === "") {
        return;
      }

      this.user_name = this.user_name.trim();

      this.fetchUsername(this.user_name).then(
        this.getProfileByUsername
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
.info {
  width: 70%;
  margin-right: 0.3rem;
  text-align: right;
  display: flex;
  flex-direction: column;
}
.info .row {
  flex: 1;
}
.row {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
}
.github-flair {
  box-sizing: border-box;
  display: flex;
  align-items: stretch;
  width: 280px;
  color: rgb(255, 255, 255);
  border: 0.09rem solid rgb(36, 41, 46);
  background: rgb(36, 41, 46);
  border-radius: 0.5rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
</style>
