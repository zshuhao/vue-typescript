import { MutationTree } from 'vuex'
import { State, ITodoItem, Mode } from './state'
import { _ } from '../utils'

export const mutations: MutationTree<State> = {
    createTodoItem (state: State, todoItem: ITodoItem) {
        state.todoList.push(todoItem)
    },

    // 选择图标背景
    selectColor (state: State, payload: { id: string; color: string }) {
        const list = state.todoList
        const todo = _.find(list, payload.id)

        if (todo) {
            todo.color = payload.color
        }
    },

    // 选择图标
    selectIcon (state: State, payload: { id: string; icon: string }) {
        const list = state.todoList
        const todo = _.find(list, payload.id)

        if (todo) {
            todo.iconName = payload.icon
        }
    },

    // 编辑任务名称
    changeName (state: State, payload: { id: string, value: string }) {
        const list = state.todoList
        const todo = _.find(list, payload.id)

        if (todo) {
            todo.name = payload.value
        }
    },

    // 从编辑模式进入完成模式
    finishTodoItem (state: State) {
        const list: ITodoItem[] = state.todoList
        const todo = list[list.length - 1]
        if (todo) {
            todo.mode = Mode.finish
        }
    },

    deleteTodoItem (state: State, id: string) {
        const list: ITodoItem[] = state.todoList
        state.todoList = list.filter(item => item.id !== id)
    },

    // 将此任务设置为完成
    doneTodoItem (state: State, id: string) {
        const list: ITodoItem[] = state.todoList
        const todo = _.find(list, id)
        if (todo) {
            todo.isDone = true
        }
    }
}
