import React from "react";
import "./subscriptionPage.css";

function SubscriptionPage() {
  return (
    <>
      <div className="SubscriptionMainContainer">
        <div className="SubscriptionPageUpperContainer">
          <img
            src="https://www.gstatic.com/youtube/img/promos/growth/ytm_lp2_logo_desktop_552x71.png"
            alt="Youtube Music"
          />
          <h1>
            Get Music Premium to listen to music ad-free, offline & with your
            screen off
          </h1>
          <button>Get Music Premium</button>
          <p>
            Prepaid and subscription plans availabe. Prices start at
            Rs.99.00/month. Free trials available with subscription plans only.
          </p>
        </div>
        <div className="SubscriptionPageLowerContainer">
          <div className="listenbackground">
            <img
              src="https://www.gstatic.com/youtube/img/promos/growth/ytm_lp2_icon_feature_headset_84x84.png"
              alt="listen"
            />
            <p className="listenbackground-firstpara">
              Listen in the background
            </p>
            <p className="listenbackground-secondpara">
              Don't worry about your music stopping
            </p>
          </div>
          <div className="adfreemusic">
            <img
              src="https://www.gstatic.com/youtube/img/promos/growth/ytm_lp2_icon_feature_play_84x84.png"
              alt="Ad-free music"
            />
            <p className="adfree-firstpara">Ad-free music</p>
            <p className="adfree-secondpara">
              Listen to the world of music without ads
            </p>
          </div>
          <div className="downloadandgo">
            <img
              src="https://www.gstatic.com/youtube/img/promos/growth/ytm_lp2_icon_feature_download_84x84.png"
              alt="Download"
            />
            <p className="download-firstpara">Download and go</p>
            <p className="download-secondpara">
              Listen to your favorite music on the go
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubscriptionPage;
