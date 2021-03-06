import React ,{Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import Payments from './Payments';

class Header extends Component {

    renderContent(){
        switch(this.props.auth){
            case null :
            return 'still deciding';
            case false:
            return <li> <a href="/auth/google"> Login with google </a> </li>;
            default:
            return [
                <li key="1"> <Payments/> </li>,
                <li key="3"> Credits : {this.props.auth.credits} </li>,
                <li key="2"> <a href="/api/logout"> Logout </a> </li>
            ];
        }
    }

    render(){
        console.log("props" ,this.props)
        return (
         
            <nav>
                   {this.renderContent}
            <div className="nav-wrapper">
            <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo" > Emaily </Link>
            {/* <Payments/>  */}
            
              <ul id="nav-mobile" style={{'float' :'right'}}>
              <li> <a href="/auth/google"> Login with google </a> </li>
              <li key="1"> <Payments/> </li>
              
              </ul>
            </div>
          </nav>
        )
    }
}

function mapStateToProps({auth}){
    return {auth}
}

export default  connect (mapStateToProps) (Header);