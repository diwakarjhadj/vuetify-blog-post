<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="d-flex align-center justify-space-between">
            Blog Posts
            <v-btn color="primary" to="/create">
              <v-icon start>mdi-plus</v-icon>
              New Post
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-list v-if="posts.length">
              <v-list-item v-for="post in posts" :key="post._id" :title="post.title">
                <template v-slot:subtitle>
                  By {{ post.author }} on {{ formatDate(post.date) }}
                </template>
                <template v-slot:append>
                  <v-btn icon="mdi-pencil" variant="text" :to="`/edit/${post._id}`"></v-btn>
                  <v-btn
                    icon="mdi-delete"
                    variant="text"
                    @click="openDeleteDialog(post)"
                  ></v-btn>
                </template>
              </v-list-item>
            </v-list>
            <v-alert v-else type="info" text="No blog posts yet. Create your first post!"></v-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Delete Confirmation Dialog -->
    <v-dialog v-model="isDeleteDialogOpen" max-width="500">
      <v-card>
        <v-card-title class="text-h6">
          Are you sure you want to delete this post?
        </v-card-title>
        <v-card-text>
          {{ selectedPost?.title }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn variant="text" @click="isDeleteDialogOpen = false">Cancel</v-btn>
          <v-btn color="error" variant="text" @click="confirmDelete">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useBlogStore } from '../store/blog';
import { storeToRefs } from 'pinia';

const store = useBlogStore();
const { posts } = storeToRefs(store);

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString();
};

// State for the delete confirmation dialog
const isDeleteDialogOpen = ref(false);
const selectedPost = ref<{ _id: string; title: string } | null>(null);

// Open the delete dialog
const openDeleteDialog = (post: { _id: string; title: string }) => {
  selectedPost.value = post;
  isDeleteDialogOpen.value = true;
};

// Confirm deletion
const confirmDelete = async () => {
  if (!selectedPost.value) return;

  try {
    await store.deletePost(selectedPost.value._id);
    isDeleteDialogOpen.value = false;
    selectedPost.value = null;
  } catch (error) {
    console.error('Failed to delete post:', error);
  }
};

onMounted(async () => {
  await store.fetchPosts();
});
</script>
