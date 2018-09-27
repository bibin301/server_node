import React ,{Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {

    renderContent(){
        switch(this.props.auth){
            case null :
            return 'still deciding';
            case false:
            return <li> <a href="/auth/google"> Login with google </a> </li>;
            default:
            return <li> <a > Logout </a> </li>;
        }
    }

    render(){
        console.log("props" ,this.props)
        return (
            <nav>
            <div className="nav-wrapper">
            <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo" > Emaily </Link>
            
              <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li> <a href="/auth/google"> Login with google </a> </li>
                {/* {this.renderContent} */}
              
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