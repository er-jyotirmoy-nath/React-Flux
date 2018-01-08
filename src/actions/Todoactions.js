var todoactions = {
	createTodo: function(text){
		dispatcher.dispatch({
			type:"CREATE_TODO",
			text:text
		});
	},
	removeTodo: function(id){
		dispatcher.dispatch({
			type:"REMOVE_TODO",
			id:id
		});
	}

};