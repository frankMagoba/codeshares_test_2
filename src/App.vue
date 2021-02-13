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
          <v-checkbox v-model="artistcheck" label="Artist"></v-checkbox>
        </v-col>
        <v-col lg="2" cols="sm" class="pb-2">
          <v-checkbox v-model="albumcheck" label="Album"></v-checkbox>
        </v-col>
        <v-col lg="4" cols="sm" class="pb-2">
          <v-btn class="ma-2" outlined color="success" @click="dialog = true">
            Add new album
          </v-btn>
        </v-col>
      </v-row>

      <v-row class="mb-3">
        <v-col lg="4" cols="sm" class="pb-2">
          <v-img
            :lazy-src="albumPic"
            max-height="200"
            max-width="200"
            :src="albumPic"
          ></v-img>
        </v-col>
        <v-col lg="4" cols="sm" class="pb-2">
          <v-row class="no-gutters">
            <div class="col-auto">
              <div class="primary fill-height">&nbsp;</div>
            </div>
            <div>
              <h6 class="text-truncate text-uppercase">ALBUM</h6>
              <h1>{{ albumName }}</h1>
              <h6 class="text-truncate">By {{ bandName }}</h6>
            </div>
          </v-row>
        </v-col>
      </v-row>

      <v-card>
        <v-card-title> </v-card-title>
        <v-data-table
          @click:row="selectApplication"
          :headers="headers"
          :items="albums"
          :search="search"
        ></v-data-table> </v-card
    ></v-container>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>Add Album</v-card-title>
        <v-form v-model="isValid">
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    v-model="formData.artist"
                    label="Artist Name"
                    :rules="[(v) => !!v || 'Artist Name is required']"
                  />
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    v-model="formData.album"
                    label="Album Name"
                    :rules="[(v) => !!v || 'Album Name is required']"
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-form>
        <v-card-actions>
          <v-spacer />
          <v-btn color="red" text @click="dialog = false"> Cancel </v-btn>
          <v-btn color="primary" text :disabled="!isValid" @click="save">
            Save
          </v-btn>

          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {},

  data() {
    return {
      albumcheck: false,
      artistcheck: false,
      isValid: false,
      albumPic: "",
      albumName: "",
      bandName: "",
      formData: {
        artist: "",
        album: "",
      },
      search: "",
      dialog: false,
      headers: [
        { text: "#", value: "@attr.rank" },
        { text: "Title", value: "name" },
        { text: "Artist", value: "artist.name" },
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
  created() {
    this.loadData();
  },
  methods: {
    ...mapActions({
      getAlbums: "getAlbums",
    }),

    async loadData() {
      try {
        await this.getAlbums("all");
      } catch (error) {
        // TODO: show snackbar
      } finally {
        this.loading = false;
      }
    },
    selectApplication(item) {
      this.albumPic = item.image[2]["#text"];
      this.albumName = item.name;
      this.bandName = item.artist.name;
    },
    save(){}
  },

  computed: {
    albums() {
      return this.$store.getters["albumss"];
    },
  },
};
</script>
