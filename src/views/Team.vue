<template>
  <div class="team">
    <h1 class="subheading grey--text">team</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="name in team" :key="name.name" >
          <v-card flat class="text-xs-center primary ma-3 white--text">
           <v-responsive class="pt-4">
          <v-avatar size="140">
             <img :src=" name.avatar" alt="">
          </v-avatar>
           </v-responsive>
           <v-card-text>
             <div class="subheading">
               {{name.name}}
             </div>
             <div class="white--text">
               {{name.role}}
             </div>
             <v-card-actions >
               <v-btn flat class="white--text">
                 <v-icon small left>message</v-icon>
                 <span>message</span>
               </v-btn>
             </v-card-actions>
           </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      team: [
        { name: "Someone", role: "Web developer",avatar:'./avatar/avatar-1.jpg' },
        { name: "Surovi", role: "Graphic designer", avatar:'./avatar/avatar-2.jpg'},
        { name: "Md Abu Talib", role: "Web developer",avatar:'./avatar/avatar-3.jpg'},
        { name: "Khaled", role: "Social media maverick",avatar:'./avatar/avatar-4.jpg' },
        { name: "Mishu", role: "Sales guru",avatar:'./avatar/avatar-5.jpg'}
      ]
    };
  }
};
</script>
<style>
.v-card__actions{
  justify-content: center;
}
</style>
