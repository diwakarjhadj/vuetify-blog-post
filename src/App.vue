<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>
        <router-link to="/" style="text-decoration: none; color: inherit;">
          Vuetify Blog
        </router-link>
      </v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
</script>