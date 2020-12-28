// import GithubFollowersSVG from "@/components/svg/GithubFollowersSVG";
// import GithubGistSVG from "@/components/svg/GithubGistSVG";
// import GithubRepositoriesSVG from "@/components/svg/GithubRepositoriesSVG";
// import GithubSVG from "@/components/svg/GithubSVG";
// import AvatarView from "@/components/AvatarView";
// import LocationSVG from "@/components/svg/LocationSVG";
import VueGithubFlair from "@/components/VueGithubFlair";
//
// const GithubFlair = {
//   install(Vue) {
//     // Vue is a Vue Constructor, not an Vue instance. This plugin requires passing the main app Vue instance as options parameter.// Vue.component need to be called BEFORE new Vue() in main.js...
//     Vue.component(GithubFollowersSVG.name, GithubFollowersSVG);
//     Vue.component(GithubGistSVG.name, GithubGistSVG);
//     Vue.component(GithubRepositoriesSVG.name, GithubRepositoriesSVG);
//     Vue.component(GithubSVG.name, GithubSVG);
//     Vue.component(AvatarView.name, AvatarView);
//     Vue.component(LocationSVG.name, LocationSVG);
//     Vue.component(VueGithubFlair.name, VueGithubFlair);
//     /*const storeName = "GithubCardService"; // While app only available AFTER new Vue() in main.js...
//     // Add store only once.
//     if (!rootStore.hasModule(storeName)) {
//       rootStore.registerModule(storeName, GithubCardService);
//     }*/
//   },
// };
export default VueGithubFlair;

export {VueGithubFlair };
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(VueGithubFlair);
}
