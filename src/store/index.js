import axios from "axios";

export default {
    strict: true,
    state: {
        todoList: [
            {status: 'completed', content: '吃饭'},
            {status: 'completed', content: '睡觉'},
            {status: 'completed', content: '打豆豆'}
        ],
        currentFilter: 'all'
    },
    getters: {
        filteredTodoList: function (state) {
            let filteredTodoList = [];
            for (let i = 0; i < state.todoList.length; i++) {
                if (state.currentFilter === 'all' || state.currentFilter === state.todoList[i].status) {
                    filteredTodoList.push(state.todoList[i])
                }
            }
            return filteredTodoList;
        }
    },
    mutations: {
        handleCreateTodo:function(state,inputtingItem){
            state.todoList.push(
                {
                    state:'active',
                    content:inputtingItem

        })
    },
    handleToggleActive:function(state,index){
        state.todoList[index].status = this.$store.state.todoList[index].status === 'completed' ? 'active' : 'completed';
    },
    handleFilter:function(state,currentFilter){
        state.currentFilter=currentFilter;
    },
    initTodos:function(state,todos){
        state.todoList=todos;
    }
},
    actions:{
        fetchTodos:function(context){
            const url="http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";
            axios.get(url).then(function (response){
                context.commit('initTodos',response.data);
               
            }).catch(function(error)
            {
                console.log(error,response);
            })

        }
    }
}
