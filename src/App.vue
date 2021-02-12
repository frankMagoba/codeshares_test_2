<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col lg="4" cols="sm" class="pb-2">
          <v-text-field
            v-model="search"
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
        <v-col lg="4" cols="sm" class="pb-2">
          <v-btn class="ma-2" outlined color="success"> Add new album </v-btn>
        </v-col>
      </v-row>

      <v-row class="mb-3">
        <v-col lg="4" cols="sm" class="pb-2">
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="200"
            max-width="200"
            src="https://picsum.photos/id/11/500/300"
          ></v-img>
        </v-col>
        <v-col lg="4" cols="sm" class="pb-2">
          <v-row class="no-gutters">
            <div class="col-auto">
              <div class="primary fill-height">&nbsp;</div>
            </div>
            <div>
              <h6 class="text-truncate text-uppercase">ALBUM</h6>
              <h1>Album Name</h1>
              <h6 class="text-truncate">By Band name</h6>
            </div>
          </v-row>
        </v-col>
      </v-row>

      <v-card>
        <v-card-title> </v-card-title>
        <v-data-table
          :headers="headers"
          :items="albums"
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
        { text: "#", value: "id" },
        { text: "Title", value: "name" },
        // { text: "Length", value: "length" },
      ],
      // songs: [
      //   {
      //     no: 1,
      //     title: "Album track #1",
      //     length: "4.09",
      //   },
      //   {
      //     no: 2,
      //     title: "Album track #2",
      //     length: "4.20",
      //   },
      // ],
    };
  },
  beforeMount() {},

  computed: {
    albums() {
      return this.$store.getters["albums"];
    },
  },
};
</script>
