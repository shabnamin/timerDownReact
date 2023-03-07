
import React from 'react';
class Tm extends React.Component {
    constructor() {
        super();
        this.state = { 
          time: {},
          inputTime: 12
         };

        this.timer = 0;
      
      }
    
      toTime(inputTime){
        let hours = Math.floor(inputTime / (60 * 60));
        let dm = inputTime % (60 * 60);
        let minutes = Math.floor(dm / 60);
        let ds = dm % 60;
        let seconds = Math.ceil(ds);
    
        let time = {
          "h": hours,
          "m": minutes,
          "s": seconds
        };
        return time;
      }

      componentDidMount() {
        let timeLeftVar = this.toTime(this.state.inputTime);
        this.setState({ time: timeLeftVar });
        if (this.timer === 0 && this.state.inputTime > 0) {
          this.timer = setInterval(()=>{
            let inputTime = this.state.inputTime - 1;
            this.setState({
              time: this.toTime(inputTime),
              inputTime: inputTime,
            });

          }
            ,1000);
        }
      }

      componentDidUpdate(){
        if (this.state.inputTime === 0) { 
          clearInterval(this.timer);
        }
      }

      render() {
        return(
            <div>
          <div >
            </div>
            <br></br>

           <div className='timer'>  {this.state.time.m} : {this.state.time.s}</div>
          </div>
        );
      }
    }
    

export default Tm