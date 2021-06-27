<template>
  <v-form>
    <v-textarea v-model="text" outlined />
    <v-btn @click="submit" color="blue" outlined>Submit</v-btn>
  </v-form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TextForm",
  data() {
    return {
      text: "",
    };
  },
  methods: {
    ...mapActions(["saveWord", "getWords"]),
    submit() {
      this.saveWord(this.text);
      this.text = "";
      this.getWords();
    },
  },
};
</script>

<style scoped></style>
