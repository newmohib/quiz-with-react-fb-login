
import React, { Component } from 'react';

class ConatentHeader extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
            <div>
            <div className="flax-view">
            <div className="text-center mb-12">
              <div className="container container_margin_100">
                  <div className="row justify-content-center" >
                      <div className="col-12 col_padding_5 ">
                          <div className="card bg-light mb-12 out_box_shodow_container">
                              <div className="continer">
                                  <div className="row">
                                      <div className="col">
                                          <div className="card-header h4">Know Thyself</div>
                                            <div className="card-body card_body">
                                             <h1 className="card-title h4 mb-3 font-weight-normal ">Join The World Largest Learning Network</h1>
                                              <p className="card-text"><a className="btn btn-lg border_dadius_30 button_style" href="question.html">Signup</a></p>
                                             
                                              <div className="fb-login-button " data-size="large" data-button-type="login_with" data-auto-logout-link="false" data-use-continue-as="false"></div>
                                            </div>
                                      </div>
                                  </div>
                              </div>
                             
                          </div>
                      </div>
                  </div>
               </div>
              
            </div>
         </div>
         </div>
         </React.Fragment>
         );
    }
}
 
export default ConatentHeader;