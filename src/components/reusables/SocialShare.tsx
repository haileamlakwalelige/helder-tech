import { PiFacebookLogoBold } from "react-icons/pi";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import {
  FacebookIcon,
  FacebookShareButton,
  FacebookShareCount,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { Container, Segment } from "semantic-ui-react";

export default function SocialShare() {
  const currentPageUrl = window.location.href
  return (
    <div>
      <Container className="mr-5">
        <Segment>
          <FacebookShareButton url={currentPageUrl} className="mr-2" >
          <FacebookIcon round={true} size={40} ></FacebookIcon>
          </FacebookShareButton>
          <TwitterShareButton url={currentPageUrl} className="mr-2">
            <TwitterIcon size={42} round={true} ></TwitterIcon>
          </TwitterShareButton>
          
          <LinkedinShareButton url={currentPageUrl} className="mr-2">
          <LinkedinIcon size={42} round={true} ></LinkedinIcon>
          </LinkedinShareButton>
          <TelegramShareButton url={currentPageUrl} className="mr-2">
            <TelegramIcon size={42} round={true}></TelegramIcon>
          </TelegramShareButton>
        </Segment>
      </Container>
    </div>
  );
}
