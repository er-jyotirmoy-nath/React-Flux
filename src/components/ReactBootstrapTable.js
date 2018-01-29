class Bs6920Reporting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        var products = this.props.reportnotnotified;var self= this;
        function dataFormater(cell, row) {
            return  cell;
        }
        function dateFormater(cell,row){
            var d = new Date(cell);
            return moment(d).format('YYYY-MM-DD');
        }
        function dateSortFunc(a, b, order) {   // order is desc or asc
            if (order == 'desc') {
              return   new Date(b.testingfinish) - new Date(a.testingfinish);
            }
            else{
              return   new Date(a.testingfinish) - new Date(b.testingfinish);
            }
          }
        return (<div className="row" id="rnn_tab">
                    <div className="col-lg-12">
                        <div className="panel panel-primary" style={{"border-color": "#67ad69"}} >
                            <div className="panel-heading" style={{"background-color": "#67ad69", "border-color": "#67ad69"}}>
                                <h3 className="panel-title">
                                    <span className="glyphicon glyphicon-signal"></span> Reported & Not Notified
                                </h3>
                            </div>
                            <div className="panel-body">
                                <i className="fa fa-asterisk text-success" aria-hidden="true" ></i><span className="text-success">Testing Passed</span>
                                <i className="fa fa-asterisk text-danger" aria-hidden="true" ></i><span className="text-danger">Testing Failed </span>
                                <i className="fa fa-asterisk text-warning" aria-hidden="true" ></i><span className="text-warning">Testing Failed and Retest Available</span>
                                <i className="fa fa-exclamation-triangle text-info" aria-hidden="true" ></i><span className="text-info">Invoice Not Paid or Not Raised</span>
                                <hr/>
                                <BootstrapTable data={products} striped={true} hover={true}   hover={true}  condensed={true}  pagination={true} search={true} exportCSV={true} >
                                    <TableHeaderColumn dataField="sample_number" dataFormat={dataFormater} isKey={true}  dataSort={true}>Sample Number</TableHeaderColumn>
                                    <TableHeaderColumn dataField="pm" dataFormat={dataFormater} dataSort={true}>PM</TableHeaderColumn>
                                    <TableHeaderColumn dataField="material" dataFormat={dataFormater} dataSort={true} >Material</TableHeaderColumn>
                                    <TableHeaderColumn dataField="matlab" dataFormat={dataFormater} dataSort={true} >Matlab</TableHeaderColumn>
                                    <TableHeaderColumn dataField="company" dataFormat={dataFormater} dataSort={true} >Company</TableHeaderColumn>
                                    <TableHeaderColumn dataField="contactname" dataFormat={dataFormater} dataSort={true} >Contact Name</TableHeaderColumn>
                                    <TableHeaderColumn dataField="testingfinish" dataFormat={dataFormater} dataSort={true} sortFunc={dateSortFunc} >Testing Finish</TableHeaderColumn>
                                    <TableHeaderColumn dataField="filestatus" dataFormat={dataFormater}  >File Status</TableHeaderColumn>
                                </BootstrapTable>
                            </div>
                        </div>
                    </div>
                </div>);

    }
}
