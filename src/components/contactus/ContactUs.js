
import React from "react";

class ContactUs extends React.Component{

    constructor(){
        super();

        this.state={

        };
    }


    render(){
        return <div id="contact_page">
            <h1>Contact Us</h1>
            <form>
                <label>Enter your name</label>
                <input type="text" name="name" />

                <br/>

                <label>Enter your mobile number</label>
                <input type="text" name="mobile" />

                <br/>

                <label>Porpose of contacting</label>
                <textarea rows="10"></textarea>
            </form>
        </div>
    }
}

export default ContactUs;