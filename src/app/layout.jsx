import React from 'react';  
import Script from 'next/script'; 
import '../app/globals.css'

import SetLookerEmbed from '../components/SetLookerEmbed';
import { MiroSDKInit } from '../components/SDKInit'; 

export default function RootLayout({ children }) {
    return ( <html> 
      <head>
        <link rel="stylesheet" href="https://unpkg.com/mirotone@^5/dist/styles.css"></link>
      </head>
      <body> 
        <Script src="https://miro.com/app/static/sdk/v2/miro.js"  strategy="beforeInteractive" /> 
        <MiroSDKInit /> 
        <div id="root"> 
          <div className="grid"> 

            <div className="cs1 ce12"> 
              <SetLookerEmbed />
            </div> 

          </div> 
        </div> 
      </body> 
    </html> ); 
} 
