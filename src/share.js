import React, { Component } from 'react';
import { FacebookShareButton, FacebookIcon } from 'react-share';


export default class Share extends Component {
    render(){
        const shareUrl = 'https://images.unsplash.com/photo-1533659828870-95ee305cee3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRyZXNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60';
        return(
        <div 
            style={{
                background: '#0000',
                height: '100vh',
                width: '100%',
            }}
        >
                <h1>How to use react share</h1>

                <FacebookShareButton url={shareUrl}>
                    <FacebookIcon sice={40}/>
                </FacebookShareButton>
            </div>
        );
    }
}