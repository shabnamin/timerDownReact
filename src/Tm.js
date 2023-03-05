
import React from 'react';
class Tm extends React.Component {
    constructor() {
        super();
        this.state = { time: {}, seconds: 10 };
        this.timer = 0;
        this.start = this.start.bind(this);
        this.countDown = this.countDown.bind(this);
      }
    
      toTime(inputTime){
        let hours = Math.floor(inputTime / (60 * 60));
        let dm = inputTime % (60 * 60);
        let minutes = Math.floor(dm / 60);
        let ds = dm % 60;
        let seconds = Math.ceil(ds);
    
        let obj = {
          "h": hours,
          "m": minutes,
          "s": seconds
        };
        return obj;
      }
    
      componentDidMount() {
        let timeLeftVar = this.toTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
      }
    
      start() {
        if (this.timer === 0 && this.state.seconds > 0) {
          this.timer = setInterval(this.countDown, 1000);
        }
      }
    
      countDown() {
        let seconds = this.state.seconds - 1;
        this.setState({
          time: this.toTime(seconds),
          seconds: seconds,
        });
        
        if (seconds===0) { 
          clearInterval(this.timer);
        }
      }
    
      render() {
        return(
            <div>
          <div >
            <button  className='start'onClick={this.start}>شروع</button>
            </div>
            <br></br>

           <div className='timer'>  {this.state.time.m} : {this.state.time.s}</div>
          </div>
        );
      }
    }
    

export default Tm