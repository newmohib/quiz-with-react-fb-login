import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { login } from './../../lib/lib';

class TopNavbar extends Component {
    state = {  }
    
    render() {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-70px";
        }
        prevScrollpos = currentScrollPos;
        }
        return ( 
            <div id="navbar">
                <div className="side_nav_manu">
                    <div className="side_nav_manu">
                        <div className="left_side_nav_manu">
                            <div className="row">
                                <div className="left_side_nav_manu2">
                                    <a  id="sidebarCollapse" >
                                    <span><i className="fa fa-align-justify icon_font_30" aria-hidden="true"></i></span>
                                    </a>
                                </div>
                                <div className="left_side_nav_manu2">
                                    <a className=""></a>
                                </div>
                            </div>
                        </div>
                        <div className="right_side_nav_manu">
                            <div className="row">
                                <div className="right_side_nav_manu2">
                                <FacebookLogin
                                    appId="322682578441110"
                                    autoLoad={true}
                                    fields="name,email,picture"
                                    callback={(response)=>this.props.loginFacebook(response)} 
                                    icon="fa-facebook"
                                    size="small"
                                     cssClass="kep-login-facebook"
                                    textButton="Login"
                                    />
                                </div>
                            </div>
                        </div>
                    </div> 
                </div> 
            </div>
         );
    }
}
 
export default TopNavbar;