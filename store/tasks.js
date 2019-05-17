import {slice, indexOf} from 'lodash'
export const state = () =>  ({
    list: []
})

export const mutations = {
    add(tasks, task){
        tasks.list.push({
            name: task,
            status: 'Pending'
        })
    },
    remove(tasks, task){
        tasks.list.splice(indexOf(tasks.list, task),1)
    },
    completed(tasks, task){
        task.status = 'Completed'
    }
}