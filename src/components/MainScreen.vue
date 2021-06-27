<template>
  <div>
    <v-banner color="blue">Welcome to app</v-banner>
    <v-card class="mx-auto align-center pa-md-4 mx-lg-auto"
            max-width="800">
      <text-form />
    </v-card>
    <WordList />
  </div>
</template>

<script>
import TextForm from "./TextForm";
import WordList from "./WordList";
export default {
  name: "MainScreen",
  components: { WordList, TextForm },
};
</script>

<style scoped></style>
