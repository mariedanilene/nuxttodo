<template>
  <div class="ui form">
    <div class="field">
      <label>Task</label>
      <input class="ui small input" type="text" name="task" v-model="task" placeholder="Do something..." @keyup.enter="add"/>
    </div>
    <button class="small ui primary basic button" type="submit" @click="add">Create</button>
  </div>
</template>

<script>
export default {
    data(){
      return{
        task:''
      }
    },
    methods:{
        add: function(){
          if(this.task !== ''){
            this.$store.commit('tasks/add', this.task)
            this.task = ''
          }
        }
    }
}
</script>
