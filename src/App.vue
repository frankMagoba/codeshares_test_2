<template>
  <v-app>
 <v-container>
 <div>
  <v-app>
    <v-card>
      <v-card-title>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="songs"
        :search="search"
      ></v-data-table>
    </v-card>
   
  </v-app>
</div></v-container>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {},

 data () {
    return {
      search: '',
      headers: [
        { text: '#', value: 'no' },
        { text: 'Title', value: 'title' },
        { text: 'Length', value: 'length' },
      ],
      songs: [
        {
          no: 1,
          title: "Album track #1",
          length: '4.09',
        },
        {
         no: 1,
          title: "Album track #2",
          length: '4.20'
        }
      ]
    }
  }
};
</script>
