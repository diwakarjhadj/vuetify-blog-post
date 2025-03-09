# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).


# Vuetify Developer Code Challenge

## Overview
This project is a blog application built using Vue and Vuetify. The purpose of this application is to demonstrate the ability to follow specific instructions, use Vuetify effectively, and write clean and maintainable code.

## Features

### 1. Home Page
- Displays all blog content in a user-friendly interface.

### 2. CRUD System
- **Create:** Add new blog posts with a title, content, author, and date.
- **Read:** View all blog posts in a structured layout.
- **Update:** Edit existing blog posts to modify their content.
- **Delete:** Remove blog posts from the application.

### 3. Persistence
- Application state is preserved through page refresh without using a database.

### 4. Styling and Customization
- Fully styled using Vuetify.
- No custom CSS is used.

## Project Setup

1. Clone the repository:
   ```bash
   git clone <repository-link>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project-folder>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run serve
   ```

## Technologies Used
- **Vue.js:** Frontend framework.
- **Vuetify:** UI framework for styling and components.
- **Local Storage:** Used to persist application state.

## How It Works

### Blog Post Structure
Each blog post contains the following fields:
- **Title:** A short, descriptive title for the blog post.
- **Text:** The main content of the blog post.
- **Author:** Name of the author.
- **Date:** The date the blog post was created or updated.

### Persistence
Local Storage is used to ensure that blog posts remain available even after refreshing the page. This avoids the need for a database.

### CRUD Operations
- **Create:** Input fields and a button allow users to create a new blog post.
- **Read:** Blog posts are displayed on the home page in a card format.
- **Update:** An edit button on each blog post opens a form to modify its fields.
- **Delete:** A delete button removes the blog post from the application and local storage.

## Deployment
To deploy the application:
1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the generated `dist` folder to any static hosting platform (e.g., Netlify, Vercel).

## Submission Instructions
- Make the repository public on GitHub.
- Send the repository link to **[hello@vuetifyjs.com](mailto:hello@vuetifyjs.com)**.
- Use the subject line: `Vuetify Developer Code Challenge`.

## FAQ
- **Can I add authentication?** Yes.
- **Can I add a database?** Yes.
- **Can I use additional plugins?** Yes, but minimal usage is preferred.
- **Can I use vanilla Vuetify styling?** Yes.
- **Can I copy a design I found online?** Yes, this is encouraged.

## Deadline
Submit your application by **Sunday, March 9th**.

## Final Thoughts
This challenge is a great opportunity to showcase your Vue and Vuetify expertise while adhering to specific project requirements. Good luck!

