<template>
  <v-app-bar app color="main">
    <v-app-bar-nav-icon
      v-if="this.$route.name !== 'login' && this.$route.name !== 'hub' && this.$route.name !== 'admin'">
      <v-icon class="white--text" v-on:click="back">arrow_back</v-icon>
    </v-app-bar-nav-icon>

    <v-toolbar-title class="white--text">Sentin'Ailes</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn
      v-if="this.$route.name !== 'login' && this.$route.name !== 'register'"
      class="white--text"
      icon
      @click="logoutUser">
      <v-icon>power_settings_new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Appbar',
  methods: {
    back() {
      this.$router.back();
    },
    logoutUser() {
      this.$store.dispatch('auth/logout');
    },
  },
};
</script>
