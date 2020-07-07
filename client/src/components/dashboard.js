import React, { Component } from 'react';
import '../assets/css/dashboard.css';






class Dashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-lg-2">
            <h1 className="h2 mb-3 font-weight-normal">
            <span className="mr-3"><img classname="mb-4" src={require('../assets/img/bug.svg')} 
              alt="Bug Icon" width="32" height="32" /></span>
            Bug Tracker 
            </h1>
            <p><a class="btn btn-primary btn-md" href="#" role="button">Learn more &raquo;</a></p>
            <p><a class="btn btn-primary btn-md" href="#" role="button">Learn more &raquo;</a></p>
            <p><a class="btn btn-primary btn-md" href="#" role="button">Learn more &raquo;</a></p>
            <p><a class="btn btn-primary btn-md" href="#" role="button">Learn more &raquo;</a></p>
            <p><a class="btn btn-primary btn-md" href="#" role="button">Learn more &raquo;</a></p>
            </div>

            <div className="col-md-9 col-lg-10">
              <div className="row"> 
                <div class="col-6">
                  <div class="card">
                      <div class="card-body">
                          <canvas id="chLine"></canvas>
                      </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="card">
                      <div class="card-body">
                          <canvas id="chLine"></canvas>
                      </div>
                  </div>
                </div>
              </div>  
            </div>

          </div>
        </div>
      </React.Fragment>
      )
  }
}


export default Dashboard
