import { defineStore } from 'pinia';

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  author: string;
  date: string;
}

const API_URL = 'http://localhost:3000/api';

export const useBlogStore = defineStore('blog', {
  state: () => ({
    posts: [] as BlogPost[]
  }),

  actions: {
    async fetchPosts() {
      try {
        const response = await fetch(`${API_URL}/posts`);
        const data = await response.json();
        this.posts = data;
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    },

    async createPost(post: Omit<BlogPost, '_id' | 'date'>) {
      try {
        console.log("Hello:::::");
        const response = await fetch(`${API_URL}/posts`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(post)
        });
        if (!response.ok) throw new Error('Failed to create post');
        await this.fetchPosts();
      } catch (error) {
        console.error('Failed to create post:', error);
        throw error;
      }
    },

    async updatePost(post: BlogPost) {
      try {
        const response = await fetch(`${API_URL}/posts/${post._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: post.title,
            content: post.content,
            author: post.author
          })
        });
        if (!response.ok) throw new Error('Failed to update post');
        await this.fetchPosts();
      } catch (error) {
        console.error('Failed to update post:', error);
        throw error;
      }
    },

    async deletePost(id: string) {
      try {
        const response = await fetch(`${API_URL}/posts/${id}`, {
          method: 'DELETE'
        });
        if (!response.ok) throw new Error('Failed to delete post');
        await this.fetchPosts();
      } catch (error) {
        console.error('Failed to delete post:', error);
        throw error;
      }
    }
  }
});