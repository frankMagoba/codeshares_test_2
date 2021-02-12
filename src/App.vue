<template>
  <v-app>
    <v-container>
      <v-row class="mb-0">
        <v-col lg="4" cols="sm" class="pb-2">
          <v-text-field
            solo
            label="Search"
            prepend-inner-icon="mdi-search-web"
          ></v-text-field
        ></v-col>
        <v-col lg="2" cols="sm" class="pb-2">
          <v-checkbox v-model="checkbox" label="Artist"></v-checkbox>
        </v-col>
        <v-col lg="2" cols="sm" class="pb-2">
          <v-checkbox v-model="checkbox" label="Album"></v-checkbox>
        </v-col>
      </v-row>

      <v-card>
        <v-card-title> </v-card-title>
        <v-data-table
          :headers="headers"
          :items="songs"
          :search="search"
        ></v-data-table> </v-card
    ></v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},

  data() {
    return {
      search: "",
      headers: [
        { text: "#", value: "no" },
        { text: "Title", value: "title" },
        { text: "Length", value: "length" },
      ],
      songs: [
        {
          no: 1,
          title: "Album track #1",
          length: "4.09",
        },
        {
          no: 2,
          title: "Album track #2",
          length: "4.20",
        },
      ],
    };
  },
};
</script>
