<template>
    <div id="app">
        <h2>
            Vue To Do List
            Simple Todo List with adding and filter by diff status.
        </h2>
        
        <CreateForm/>
        <TodoList/>
        <TodoListFilter/>
    </div>
</template>

<script>
    import CreateForm from './components/CreateForm.vue'
    import TodoList from './components/TodoList.vue'
    import TodoListFilter from './components/TodoListFilter.vue'
    //import axios from "axios";
   // import { get } from 'http';

    export default {
        name: 'app',
        components: {
            CreateForm,
            TodoList,
            TodoListFilter,
        },
        created:function(){
            this.$store.dispatch("fetchTodos");
            // axios:get("http://5b4dcb2aec112500143a2311.mockapi.io/api/todos").then(function (response){
            //     console.log(response);
            // }).catch(function(error)
            // {
            //     console.log(error);
            // })
            // ;
            // axios:post("http://5b4dcb2aec112500143a2311.mockapi.io/api/todos",{
            //     id:45,
            //     content:"hello",
            //     status:"active"
               
            // }).catch(function(error)
            // {
            //     console.log(error);
            // })
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .items {
        list-style: none;
        text-align: left;
        line-height: 30px;
    }

    .items li.completed {
        text-decoration: line-through;
    }

    .filter a {
        margin: 0 10px;
        line-height: 30px;
    }

    .filter a.active {
        color: #f60;
        border: 1px solid #ccc;
        border-radius: 2px;
        padding: 3px;
        cursor: pointer;
    }
</style>
