import React from "react";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <>
      <div className="overlay">
        <div onClick={(e) => e.stopPropagation()} className="modalContainer">
          <div className="modalContent">
            <div className="header">
              <button onClick={onClose} className="closeBtn">
                close
              </button>
              <h3>Join Thousands of Professionals</h3>
            </div>
            <div className="modalBody">
              <p className="text1">
                Get the tools and skills needed to improve your website.
                Subscribe to the Website Blog.
              </p>

              <p className="label">Email address*</p>
              <div className="inputDiv">
                <input type="text" />
                <button className="subscribe">Subscribe</button>
              </div>
              <p className="text2">
                We're committed to your privacy. HubSpot uses the information
                you provide to us to contact you about our relevant content,
                products, and services. You may unsubscribe from these
                communications at any time. For more information, check out our
                Privacy Policy.
              </p>
              <div className="line"></div>
              <p className="footer">Not Using HubSpot yet?</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
