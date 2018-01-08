class Todo extends React.Component {
    constructor(props) {
        super(props);
    }
    deleteTodo(){
    	todoactions.removeTodo(this.props.id);
    }
    render() {
        return (
            <li >{this.props.text}<button className="btn btn-default" onClick={this.deleteTodo.bind(this)}>X</button></li>
        );
    }
}
