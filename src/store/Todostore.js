class Todostore extends EventEmitter{
	constructor(){
		super();
		this.todos = [];
	}
	getTodos(){
		return this.todos;
	}
	createTodo(text){
		this.todos.push({
			id:Date.now(),
			text,
			complete:false
		});
		this.emit('change');
	}
	removeTodo(id){
		for(let i=0;i<this.todos.length;i++){
			if(this.todos[i].id == id){
				this.todos.splice(i,1);
			}
		}
		this.emit("change");
	}
	handleTodos(action){
		switch(action.type){
			case'CREATE_TODO':
				this.createTodo(action.text);
				break;
			case'REMOVE_TODO':
				this.removeTodo(action.id);
				break;
			case'LOAD_TODOS':
				this.todos=action.todos;
				this.emit("change");
				break;
		}
	}
}
var dispatcher = new window.Flux.Dispatcher();
var todostore = new Todostore();
dispatcher.register(todostore.handleTodos.bind(todostore));

