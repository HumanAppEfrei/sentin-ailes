<template>
  <v-container class="fill-height">
      <v-row justify="center">
          <v-col cols="12" sm="6">
            <MenuTile
              color="personalInfo"
              icon="person"
              text="Informations personnelles"
              link="/contact-info" />
          </v-col>

          <v-col cols="12" sm="6">
            <MenuTile
              color="calendar"
              icon="event"
              text="Calendrier"
              link="/calendar" />
          </v-col>

          <v-col cols="12" sm="6">
            <MenuTile
              color="notes"
              icon="fas fa-sticky-note"
              text="Notes"
              link="/notes" />
          </v-col>

          <v-col cols="12" sm="6">
            <MenuTile
              color="exercise"
              icon="fas fa-chess"
              text="Exercices"
              link="/exercises" />
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import MenuTile from '@/components/MenuTile.vue';

export default {
  components: {
    MenuTile,
  },
};
</script>
