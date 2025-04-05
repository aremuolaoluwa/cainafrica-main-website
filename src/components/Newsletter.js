import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <h2 className="letter-heading">Join our Newsletter</h2>
      <p className="letter-subheading">Stay updated with our latest news, events, and opportunities.</p>

      <form className="letter-form"
        action="https://cainafrica.us6.list-manage.com/subscribe/post?u=47db4d6cc70082fdd60e1ac73&id=a7f3d31cb6"
        method="post"
        noValidate
      >
        <input className="letter-input" type="text" name="FNAME" placeholder="Your name" required />
        <input className="letter-input" type="email" name="EMAIL" placeholder="Your email" required />
        <button className="letter-btn" type="submit">Subscribe</button>
        {/* <p className="disclaimer">
          We respect your privacy. Unsubscribe anytime.
        </p> */}
      </form>
    </div>
  );
};

export default Newsletter;