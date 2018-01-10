const Route = ()=>{
  <Router history={hashHistory} >
                <Route  path={'/'} component={Home}>
                  <IndexRoute component={Home} />
                  <Route path={'/awaiting_testing_list'} component={Awaitingtesting}></Route>
                  <Route path={'/wip_list'} component={Wiplist}></Route>
                  <Route path={'/testing_sections'} component={Testingsections}></Route>                
                </Route>
            </Router>
}