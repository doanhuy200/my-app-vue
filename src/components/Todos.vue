<template>
  <TodoItem
    v-for="todo in todos"
    :key="todo.id"
    :todoProps="todo"
    @item-completed="markComplete"
    @delete-item="deleteTodo"
  />
</template>

<script>
  // import { ref } from 'vue';
  import TodoItem from './TodoItem'
  // import AddTodo from './AddTodo'
  // import { v4 as uuidv4 } from 'uuid'
  // import axios from 'axios'

  export default {
    name: 'Todos',
    components: { TodoItem },
    computed: {
      todos() {
        return this.$store.state.todos;
      },
    },
    setup() {
      // const todos = ref([
      //   {
      //     id: uuidv4(),
      //     title: 'Việc 1',
      //     completed: false
      //   },
      //   {
      //     id: uuidv4(),
      //     title: 'Việc 2',
      //     completed: false
      //   },
      //   {
      //     id: uuidv4(),
      //     title: 'Việc 3',
      //     completed: false
      //   },
      // ]);
      // const todos = ref([]);
      //
      // const getAllTodos = async() => {
      //   try {
      //     const res = await axios.get(
      //       'https://jsonplaceholder.typicode.com/todos?_limit=5'
      //     )
      //
      //     todos.value = res.data
      //   } catch (error) {
      //     console.log(error)
      //   }
      // }
      // getAllTodos()

      // const markComplete = id => {
      //   todos.value = todos.value.map(todo => {
      //     if (todo.id === id) todo.completed = !todo.completed;
      //     return todo
      //   })
      // };
      //
      // const deleteTodo = async id => {
      //   try {
      //     // todos.value = todos.value.filter(todo => todo.id !== id)
      //     await axios.delete("https://jsonplaceholder.typicode.com/todos/${id}")
      //     todos.value = todos.value.filter(todo => todo.id !== id)
      //   } catch (error) {
      //     console.log(error)
      //   }
      //
      // };
      //
      // const addTodo = async newTodo => {
      //   try {
      //     const res = await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
      //     todos.value.push(res.data)
      //   } catch (error) {
      //     console.log(error)
      //   }
      // }

      // return {
        // todos,
        // markComplete,
        // deleteTodo,
        // addTodo
      // }
    }
  }
</script>

<style>
</style>
