class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			todos:todostore.getTodos()
		};
		this.getTodos = this.getTodos.bind(this);
	}
	componentWillMount(){
		console.log(window);
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
						return (<li>{item.text}</li>);
					})}
				</ul>
				<Addtodo />
			</div>);
	}
}

ReactDOM.render(<App/>,document.getElementById('root'));