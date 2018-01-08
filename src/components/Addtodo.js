
class Addtodo extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
        	todotext:''
        };
    }
    addTodo(){
    	todoactions.createTodo(this.state.todotext);
    }
    updateTodo(e){
    	this.setState({todotext:e.target.value});
    }
    render() {
        return (
            <form className="form-inline" >
			  <div className="form-group">
			    <label for="todo">Enter New Todo:</label>
			    <input type="text" onChange={this.updateTodo.bind(this)} className="form-control" id="todo" />
			  </div>
			  
			  <button type="button" onClick={this.addTodo.bind(this)} className="btn btn-success">Submit</button>
			</form>
        );
    }
}