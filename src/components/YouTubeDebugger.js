// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {

    constructor() {
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        };
    }

    handleChangeBitrate = () => {
       this.setState({
           settings: {
               ...this.state.settings,
               bitrate: 12
           }
       });
    };

    handleChangeResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }

    /* 
    
    or this can be defined using the Object.assign method:

    this.setState({
        settings: Object.assign({}, this.state.settings, {
            video: Object.assign({}, this.state.settings.video, {
                resolution: '720p'
            })
        })
    });

    */

    render() {
        return(
        <div>
        <button className='bitrate' onClick={this.handleChangeBitrate}> 
        Change bitrate
        </button>
        <button className='resolution' onClick={this.handleChangeResolution}>
            Change resolution
        </button>
        </div>
        );

    }

}

export default YouTubeDebugger;

/* 

A Note on Classes in React

Classes can be added as attributes in JSX, similar to HTML. The one difference to remember
is that in JSX, we must use the className attribute, rather than class. Using class will
cause an error while testing. Classes are used in this lab to make testing your
solution a litter easier

*/