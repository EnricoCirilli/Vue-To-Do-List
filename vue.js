const { createApp } = Vue;

const app = Vue.createApp({
    data() {
        return{
            header: 'TOLEARN LIST',
            todo_text:'',
            todos: [
                {text :'learn HTML'},
                {text :'learn CSS'},
                {text :'learn SleepStudyRepeat'},
                 {text :'learn JavaScript'},
                 {text :'learn Vue Js'},
            ],
            image:'images.jpeg'
        }
    },
    methods:{
        addTodo(){
            this.todos.push({
                text: this.todo_text,
            });
            this.todo_text='';
        },
        // removeTodo(){
        //     this.todos.pop({
        //         text: this.todo_text,
        //     });
        //     this.todo_text='';
            
        // },
        removeTodo(index){
            this.todos.splice(index,1)
        },
       
    }

     
  });
  app.mount("#app");