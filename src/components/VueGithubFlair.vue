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
    <!--    <svg
      title="GitHub Flair"
      width="30"
      height="30"
      viewBox="0 0 250 250"
      style="
        fill: rgb(255, 255, 255);
        color: rgb(36, 41, 46);
        position: absolute;
        top: 0px;
        right: 44px;
        border: 0px;
      "
    >
      <path
        d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
        fill=""
      ></path>
    </svg>-->
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
    <div
      class="info"
      style="
        width: 160px;
        text-align: right;
        font-size: 14px;
        margin-right: -8px;
      "
    >
      <div class="name" style="/* font-weight: bold; */ font-size: 14px">
        <a
          :href="profile.url"
          target="_blank"
          style="color: rgb(255, 255, 255); text-decoration: blink"
        >
          <svg
            style="fill: rgb(255, 255, 255)"
            width="12"
            height="12"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
          {{ username }}</a
        >
      </div>
      <div class="meta">
        <a :href="'https://github.com/' + username + '?tab=followers'">
          <span title="Followers"
            ><svg
              height="11"
              viewBox="0 -2 16 16"
              width="11"
              style="fill: rgb(255, 255, 255)"
            >
              <path
                fill-rule="evenodd"
                d="M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4"
              ></path>
            </svg>
            {{ profile.followers }}&nbsp;</span
          ></a
        >

        <a :href="'https://github.com/' + username + '?tab=repositories'">
          <span title="Public Repositories"
            ><svg
              height="12"
              viewBox="0 -2 12 16"
              width="12"
              style="fill: rgb(255, 255, 255)"
            >
              <path
                fill-rule="evenodd"
                d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
              ></path>
            </svg>
            {{ profile.repos }}&nbsp;</span
          ></a
        >
        <a :href="'https://gist.github.com/' + username">
          <span title="Public Gists"
            ><svg
              height="12"
              viewBox="0 -2 12 16"
              width="12"
              style="fill: rgb(255, 255, 255)"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 5L10 7.5 7.5 10l-.75-.75L8.5 7.5 6.75 5.75 7.5 5zm-3 0L2 7.5 4.5 10l.75-.75L3.5 7.5l1.75-1.75L4.5 5zM0 13V2c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1zm1 0h10V2H1v11z"
              ></path>
            </svg>
            {{ profile.public_gists }}</span
          ></a
        >
        <!--        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 32 32"
        >
          <path
              d="M31.881 12.557a2.303 2.303 0 0 0-1.844-1.511l-8.326-1.238-3.619-7.514C17.711 1.505 16.896 1 16 1s-1.711.505-2.092 1.294l-3.619 7.514-8.327 1.238A2.3 2.3 0 0 0 .12 12.557a2.207 2.207 0 0 0 .537 2.285l6.102 6.092-1.415 8.451a2.224 2.224 0 0 0 .948 2.203 2.351 2.351 0 0 0 2.449.131L16 27.811l7.26 3.908a2.367 2.367 0 0 0 2.449-.131 2.225 2.225 0 0 0 .947-2.203l-1.416-8.451 6.104-6.092c.603-.603.81-1.485.537-2.285zm-8.293 6.806a2.216 2.216 0 0 0-.627 1.934l1.416 8.451-7.26-3.906a2.361 2.361 0 0 0-2.235 0l-7.26 3.906 1.416-8.451a2.212 2.212 0 0 0-.626-1.934L2.31 13.271l8.326-1.24a2.306 2.306 0 0 0 1.743-1.268L16 3.251l3.62 7.513a2.31 2.31 0 0 0 1.742 1.268l8.328 1.24-6.102 6.091z"
          />
        </svg>
        {{ profile.stars }}-->
      </div>
      <div class="location">
        <svg
          height="12"
          viewBox="0 0 12 16"
          width="12"
          style="fill: rgb(255, 255, 255)"
        >
          <path
            fill-rule="evenodd"
            d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
          ></path>
        </svg>
        <span>&nbsp;{{ profile.location }}</span>
      </div>
    </div>
  </div>
</template>
<!--
<script>

export default {
  name: "VueGithubFlair",
};
</script>-->

<script>
import GithubCardService from "./GithubCardService";

export default {
  name: "VueGithubFlair",
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
