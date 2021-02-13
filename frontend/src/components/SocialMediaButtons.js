import React from "react";
import {FacebookShareButton, FacebookIcon, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton} from "react-share";
       
export default function SocialMediaButtons(props) {
    return (
           <div className="m-3">
             <FacebookShareButton 
                url={props.url}
                quote={props.caption}
                hashtag={"#xmeme"}>
                 <FacebookIcon size={36} />
              </FacebookShareButton>

                <TwitterShareButton
                    url={props.url}
                    title={props.caption}
                    hashtag="#xmeme">
                    <TwitterIcon size={36} />
                </TwitterShareButton>
                
                <WhatsappShareButton
                    url={props.url}
                    title={props.caption}
                    separator=":: ">
                    <WhatsappIcon size={36} />
                </WhatsappShareButton>
            </div>
       );
}