class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			todos:[]
		};
		this.getTodos = this.getTodos.bind(this);
	}
	componentWillMount(){
		console.log(window);
		todoactions.loadTodos();
		todostore.on("change",()=>{
			this.getTodos();
		});
	}
	getTodos(){
		this.setState({todos:todostore.getTodos()});
	}
	render(){
		return (<div>
				<ul>
					{this.state.todos.map((item)=>{
						return (<Todo id={item.id} text={item.text} />);
					})}
				</ul>
				<Addtodo />
			</div>);
	}
}

ReactDOM.render(<App/>,document.getElementById('root'));