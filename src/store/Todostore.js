class Todostore extends EventEmitter{
	constructor(){
		super();
		this.todos = [
			{
				id:2122332112,
				text:"Do your Work",
				complete:false
			},
			{
				id:4454323211,
				text:"Next Todo work",
				complete:false
			}
		];
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
	handleTodos(action){
		switch(action.type){
			case'CREATE_TODO':
				this.createTodo(action.text);
				break;
		}
	}
}
var dispatcher = new window.Flux.Dispatcher();
var todostore = new Todostore();
dispatcher.register(todostore.handleTodos.bind(todostore));

