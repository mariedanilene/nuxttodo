<template>
    <div class="ui items">
        <div class="item" v-for="(task, id) in tasks" :key="id"> 
            <div class="content">
                <div class="description">
                    <p>{{task.name}}</p>
                    <button v-if="task.status != 'Completed'" class="small ui positive basic button" @click="completed(task)">Done</button>
                    <button class="small ui negative basic button" @click="remove(task)">Delete</button>
                </div>
                <div class="extra">
                    {{task.status}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    methods:{
        ...mapMutations({
            completed: 'tasks/completed',
            remove: 'tasks/remove'
        })
    },
    computed:{
        tasks(){
            return this.$store.state.tasks.list
        }
    }
}
</script>
