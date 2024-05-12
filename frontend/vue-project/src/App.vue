<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else-if="result">
      <Post v-for="post in (result as GetPostsQuery).posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script lang="ts">
import { useQuery } from '@vue/apollo-composable';
import { GET_POSTS } from './graphql/queries';
import type { GetPostsQuery } from './graphql/generated';
import { defineComponent } from 'vue';
import Post from './components/Post.vue';

export default defineComponent({
  name: 'App',
  components: {
    Post
  },
  setup() {
    const { result, loading, error } = useQuery<GetPostsQuery>(GET_POSTS);

    return {
      result,
      loading,
      error
    }
  }
})
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>