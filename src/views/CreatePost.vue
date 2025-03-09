<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8" offset-md="2">
        <v-card>
          <v-card-title>Create New Post</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="submitPost">
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
                  Create Post
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useBlogStore } from '../store/blog';

const router = useRouter();
const store = useBlogStore();
const loading = ref(false);

const post = ref({
  title: '',
  content: '',
  author: ''
});

const submitPost = async () => {
  try {
    loading.value = true;
    await store.createPost(post.value);
    router.push('/');
  } catch (error) {
    console.error('Failed to create post:', error);
  } finally {
    loading.value = false;
  }
};
</script>