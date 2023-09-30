<script setup>
import { ref, computed } from 'vue'
import { useTodoStore } from '../store/TodoStore'
const TodoStore = useTodoStore()

const newTask = ref('');

const tasks = computed(() => TodoStore.tasks);

const addNewTask = () => {
  if (newTask.value.trim() !== '') {
    TodoStore.addTask(newTask.value);
    newTask.value = '';
  }
};

const removeTask = (index) => {
  TodoStore.removeTask(index);
};

const toggleTask = (index) => {
  TodoStore.toggleTaskStatus(index);
};
</script>

<template>
  <div>
    <input class="mr-[20px]" v-model="newTask" @keyup.enter="addNewTask" placeholder="Add a new task" />
    <button @click="addNewTask">Add Task</button>

    <ul class="mt-[25px]">
      <li class="my-[5px]" v-for="(task, index) in tasks" :key="index">
        <input type="checkbox" v-model="task.done" @click="toggleTask(index)" />
        <span class="">{{ task.name }}</span> - <template v-if="task.done">Done- </template> <template v-else >Undone- </template>
        <button class="bg-red-500 px-3 hover:bg-red-600 hover:text-white"  @click="removeTask(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
