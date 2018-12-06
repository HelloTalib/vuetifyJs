<template>
<v-container>
  <v-expansion-panel>
    <v-expansion-panel-content v-for="project in myProjects" :key="project.id">
      <div slot="header">{{project.title}}</div>
      <v-card>
        <v-card-text class="px-4 grey--text">
          <div class="font-weight-bold">{{project.due}}</div>
          <div>{{project.content}}</div>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
  </v-container>

</template>

<script>
export default {
  data() {
    return{
        projects: [
        {
          id: 1,
          title: "Design a new website",
          person: "Talib",
          due: "1st Jan 2019",
          status: "ongoing",
          content:   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quia sequi unde eius quam qui praesentium non. Voluptates, consequatur omnis aut velit error nisi rerum qui excepturi ut corrupti deleniti"
        },
        {
          id: 2,
          title: "Code up the homepage",
          person: "Mishu",
          due: "10th Jan 2019",
          status: "complete"
        },
        {
          id: 3,
          title: "Design video thumbnails",
          person: "Talib",
          due: "20th Dec 2018",
          status: "complete"
        },
        {
          id: 4,
          title: "Create a community forum",
          person: "Surovi",
          due: "20th Oct 2018",
          status: "overdue"
        }
      ]
    }
  },
  computed:{
    myProjects() {
      return this.projects.filter(project => {
        return project.person ==='Talib'
      })
    }
  }
  
}
</script>
<style>

</style>


