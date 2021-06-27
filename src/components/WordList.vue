<template>
  <v-simple-table fixed-header >
    <template v-slot:default>
      <thead>
      <tr>
        <th class="text-left">
          No
        </th>
        <th class="text-left">
          Word
        </th>
        <th class="text-left">
          Count
        </th>
        <th class="text-left">
          Stars
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="word in words"
          :key="word.word"
      >
        <td>{{ addCounter() }}</td>
        <td>{{ word.word }}</td>
        <td>{{ word.count }}</td>
        <td>
          <stars :stars="word.stars" />
        </td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Stars from './Stars';

export default {
  name: "WordList",
  components: {Stars},
  computed: mapState(["words"]),
  mounted() {
    this.getWords();
  },
  methods: {
    ...mapActions(["getWords"]),
    addCounter() {
      this.counter++
      return this.counter
    }
  },
  data() {
    return {
      counter: 1
    }
  }
};
</script>

<style scoped></style>
