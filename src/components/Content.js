import React from "react";

class Content extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "Hearaman",
            qualification: "btech",
            branch:"civil",
            city: "Mummidivaram",
            pincode:"533216"

        }

    }

    changeName() {
        this.setState({name:"Kiran"});
    }
    
    pincodeChangeHandler = (e)=> {
        this.setState({ pincode: e.target.value });
    }

    Submit() {
        
    }

    render() {
        return <div className="block">
                    <h1>Welcome {this.state.name}</h1> 
                    <button onClick={()=>this.changeName()}>change name</button>
                    <h4>Qualification = {this.state.qualification}</h4>
                    <p>Branch = {this.state.branch}</p>
                    <p>City = {this.state.city}</p>
                    <a>Pincode = {this.state.pincode}</a>
                        <br/>
                    <input type="text" value={this.state.pincode} onChange={this.pincodeChangeHandler} />
                    <button onClick={this.Submit}>Submit</button>


                </div>
    }
}

export default Content;