<template>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-side-icon class="gray--text" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">todo</span>
        <span>Vue</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat color="grey">
        <span>logout</span>
        <v-icon right>input</v-icon>
      </v-btn>
      <v-btn flat color="grey">
        <span>Login</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="150">
            <img src="/avatar/avatar-3.jpg" alt="">
          </v-avatar>
        </v-flex>
            <p class="white--text subheading mt-1">Md Abu Talib</p>
      </v-layout>

     <v-list>

       <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
         <v-list-tile-action>
           <v-icon color="white">{{link.icon}}</v-icon>
         </v-list-tile-action>
         <v-list-tile-content>
           <v-list-tile-title class="white--text">
            {{link.text}}
           </v-list-tile-title>
         </v-list-tile-content>
       </v-list-tile>
     </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      links:[
        {icon: 'dashboard', text:'Dashboard', route:'/'},
        {icon: 'folder', text:'Folder', route:'/projects'},
        {icon: 'person', text:'Team', route:'/team'}
      ]
    };
  }
};
</script>
<style>
</style>
