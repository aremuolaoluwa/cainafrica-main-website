import React from "react";

const Success = () => {
  return (
    <div className="newsletter-container succ-container">
      <i class="fa-solid fa-circle-check check-icon"></i>
      <h2 className="succ-heading">
        Thank you for subscribing to our newsletter!
      </h2>
      <p className="succ-paragraph">We're glad to have you on board. <br></br>Stay tuned for our updates!</p>
      <div class="continue-btn">
            <a href="https://www.cainafrica.org/#/">Continue to website</a>
        </div>
    </div>
  );
};

export default Success;