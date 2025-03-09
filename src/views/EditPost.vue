<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8" offset-md="2">
        <v-card>
          <v-card-title>Edit Post</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="submitPost" v-if="post">
              <v-text-field
                v-model="post.title"
                label="Title"
                required
              ></v-text-field>
              <v-textarea
                v-model="post.content"
                label="Content"
                required
              ></v-textarea>
              <v-text-field
                v-model="post.author"
                label="Author"
                required
              ></v-text-field>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" type="submit" :loading="loading">
                  Update Post
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useBlogStore } from '../store/blog';

const router = useRouter();
const route = useRoute();
const store = useBlogStore();
const loading = ref(false);

const post = ref(store.posts.find(p => p._id === route.params.id));

const submitPost = async () => {
  if (post.value) {
    try {
      loading.value = true;
      await store.updatePost(post.value);
      router.push('/');
    } catch (error) {
      console.error('Failed to update post:', error);
    } finally {
      loading.value = false;
    }
  }
};

onMounted(async () => {
  await store.fetchPosts();
  post.value = store.posts.find(p => p._id === route.params.id);
  if (!post.value) {
    router.push('/');
  }
});
</script>