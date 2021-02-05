<template>

  <main class="post individual" v-if="posts">
    <h1>{{ post.title.rendered }}</h1>
    <small class="date">{{ post.date  }}</small>
    <section v-html="post.content.rendered"></section>
    <a href="/">see all posts</a>
  </main>
</template>

<script>

export default {
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    post() {
      return this.posts.find(el => el.slug === this.slug);
    }
  },
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  created() {
    this.$store.dispatch("getPosts");
  }
};
</script>

<style scoped>
main {
  text-align: left;
}
</style>