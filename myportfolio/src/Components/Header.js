import React, { Component } from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';


import { Button } from 'reactstrap';

class Header extends Component {
    render() {
      return (
         <div >
          <header className="App-header">
            <div className="links">
             <a  href="https://www.linkedin.com/in/nithin-thomas-mathew-a51b44110/">
             <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
             <a  href="https://github.com/nithinmtp">
             <i className="fa fa-github fa-2x" aria-hidden="true"> </i></a>
             <a  href="https://www.facebook.com/nithin.thomasmathew.912">
             <i className="fa fa-facebook fa-2x fa-2" aria-hidden="true"></i></a>



             </div>
             <div className="buttons">
              <Button  className="buttona" color="#52433a" size="lg"><i className="fa fa-download" aria-hidden="true"></i> DOWNLOAD MY RESUME</Button>{' '}
             </div>
            </header>
            </div>
      );
    }
}

export default Header;