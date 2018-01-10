class Actionmodal extends React.Component {
  constructor(props){
            super(props);
            this.state = {showModal: false ,buttontext:'Set Priority'};
            this.close = this.close.bind(this);
            this.open = this.open.bind(this);
            
        }

  close() {
    this.setState({ showModal: false });
  }
  open(e) {
    e.preventDefault();
    this.setState({ showModal: true });
  }
  componentDidMount() {
    
  }  
  render() {
    return (
      <div style={{"margin-left":"40%"}}>
        <a href="" onClick={this.open.bind(this)}>
          <i className="fa fa-3x fa-cog"  aria-hidden="true"></i>
        </a>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Change Settings</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          
            </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}