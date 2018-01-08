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
	},
	loadTodos:function(){
		dispatcher.dispatch({type:"LOADING_TODOS"});
		axios.get('php/getTodosList.php')
		  .then(function (response) {
		  	console.log(response);
		  	var todos = response.data;
		    //
		    dispatcher.dispatch({
			type:"LOAD_TODOS",
			todos:todos
			});
		  })
		  .catch(function (error) {
		    console.log(error);
		  });

	}

};