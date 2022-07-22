import IconTwitter from "$lib/icons/IconTwitter.svelte";

// =====================================
// SAMPLE DATA

const sampleUser = {
  name: "Roberto Sanabria",
  username: "roberto",
  avatar: "https://img.mix.com/image/fetch/c_crop,ar_1/c_lfill,w_400,h_400,q_auto,f_jpg/https://d2xuupin39grhy.cloudfront.net/uploads/2015/0/6/28-1420568692871.jpg",
  likesCount: 5503,
  topLikes: [
    "https://img.mix.com/image/fetch/c_limit,q_auto,f_jpg,w_1500,h_1500/https://images.mix.com/production/60/09/6009e9ea5ea1e3db7b9ef04089252dd6.gif",
    "https://img.mix.com/image/fetch/c_limit,q_auto,f_jpg,w_1500,h_1500/https://images.mix.com/production/d5/b8/d5b8bd7ccfb266f74c9bce6df77b9597.jpe",
    "https://img.mix.com/image/fetch/c_limit,q_auto,f_jpg,w_1500,h_1500/https://images.mix.com/production/d8/0b/d80b83bd918d30164424018972c3eb84.jpe",
    "https://img.mix.com/image/fetch/c_limit,q_auto,f_jpg,w_1500,h_1500/https://images.mix.com/production/15/0a/150ae6d2c4947486fa357403237039c5.jpe",
    "https://img.mix.com/image/fetch/c_limit,q_auto,f_jpg,w_1500,h_1500/https://images.mix.com/production/af/83/af834a330f5c0a5c24fae253430c5aa3.jpe",
    "https://img.mix.com/image/fetch/c_limit,q_auto,f_jpg,w_1500,h_1500/https://images.mix.com/production/63/21/63214a7dfa34c69646aa3a3e3cfbcfb6.jpe",
  ],
  interests: [ "Super Cars", "Amazing", "Maserati", "Atrophotography", "Surf", "Architecture"],
};

const sampleContent = {
  title: "Winter fish",
  image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  source: {
    icon: IconTwitter,
    name: "Twitter",
  },
  sharedBy: sampleUser,
  likeCount: 478,
  likedSample: [ sampleUser, sampleUser, sampleUser ],
  topics: ['fish', 'bass', 'boat', 'summer', 'lake'],
  topRelated: [
    "https://img.mix.com/image/fetch/c_limit,q_auto,f_jpg,w_1500,h_1500/https://images.mix.com/production/60/09/6009e9ea5ea1e3db7b9ef04089252dd6.gif",
    "https://img.mix.com/image/fetch/c_limit,q_auto,f_jpg,w_1500,h_1500/https://images.mix.com/production/d5/b8/d5b8bd7ccfb266f74c9bce6df77b9597.jpe",
    "https://img.mix.com/image/fetch/c_limit,q_auto,f_jpg,w_1500,h_1500/https://images.mix.com/production/d8/0b/d80b83bd918d30164424018972c3eb84.jpe",
    "https://img.mix.com/image/fetch/c_limit,q_auto,f_jpg,w_1500,h_1500/https://images.mix.com/production/15/0a/150ae6d2c4947486fa357403237039c5.jpe",
    "https://img.mix.com/image/fetch/c_limit,q_auto,f_jpg,w_1500,h_1500/https://images.mix.com/production/af/83/af834a330f5c0a5c24fae253430c5aa3.jpe",
    "https://img.mix.com/image/fetch/c_limit,q_auto,f_jpg,w_1500,h_1500/https://images.mix.com/production/63/21/63214a7dfa34c69646aa3a3e3cfbcfb6.jpe",
  ],
}

const sampleTopic = {
  title: "Fish",
  sharedBy: sampleUser,
  followedCount: 289,
  followedSample: [ sampleUser, sampleUser, sampleUser ],
  relatedTopics: ['bass', 'boat', 'summer', 'lake'],
  content: [
    "https://img.mix.com/image/fetch/c_limit,q_auto,f_jpg,w_1500,h_1500/https://images.mix.com/production/60/09/6009e9ea5ea1e3db7b9ef04089252dd6.gif",
    "https://img.mix.com/image/fetch/c_limit,q_auto,f_jpg,w_1500,h_1500/https://images.mix.com/production/d5/b8/d5b8bd7ccfb266f74c9bce6df77b9597.jpe",
    "https://img.mix.com/image/fetch/c_limit,q_auto,f_jpg,w_1500,h_1500/https://images.mix.com/production/d8/0b/d80b83bd918d30164424018972c3eb84.jpe",
    "https://img.mix.com/image/fetch/c_limit,q_auto,f_jpg,w_1500,h_1500/https://images.mix.com/production/15/0a/150ae6d2c4947486fa357403237039c5.jpe",
    "https://img.mix.com/image/fetch/c_limit,q_auto,f_jpg,w_1500,h_1500/https://images.mix.com/production/af/83/af834a330f5c0a5c24fae253430c5aa3.jpe",
    "https://img.mix.com/image/fetch/c_limit,q_auto,f_jpg,w_1500,h_1500/https://images.mix.com/production/63/21/63214a7dfa34c69646aa3a3e3cfbcfb6.jpe",
  ],
}


// =====================================
// API FUNCTIONS

const API = {

  // HOME
  topCurators: async () => Array(12).fill(sampleUser),

  // USER
  userFromUsername: async (username) => sampleUser,

  // CONTENT
  contentFromHash: async (hash) => sampleContent,

  // TOPIC
  topicFromSlug: async (slug) => sampleTopic,

}

export default API;
