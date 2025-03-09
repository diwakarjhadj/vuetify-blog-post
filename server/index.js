import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { z } from 'zod';
import dotenv from 'dotenv';

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
    });
    console.log('MongoDB connected successfully!');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};
connectDB();

// Handle connection errors
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
  // setTimeout(connectDB, 5000);
});

// Post Schema
const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', PostSchema);

// Input validation schema
const PostValidationSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  author: z.string().min(1)
});

// Routes
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

app.post('/api/posts', async (req, res) => {
  try {
    const validatedData = PostValidationSchema.parse(req.body);
    const post = new Post(validatedData);
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.put('/api/posts/:id', async (req, res) => {
  try {
    const validatedData = PostValidationSchema.parse(req.body);
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      validatedData,
      { new: true }
    );
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete('/api/posts/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete post' });
  }
});

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});