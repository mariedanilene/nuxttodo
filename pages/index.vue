<template>
  <div class="ui one column grid container">
    <div class="column">
      <task-form/>
    </div>
    <div class="column">
      <task-items/>
    </div>
  </div>
</template>

<script>
import taskForm from '~/components/Task/Form'
import taskItems from '~/components/Task/Items'
export default {
  components:{
    taskForm,
    taskItems
  }
}
</script>
