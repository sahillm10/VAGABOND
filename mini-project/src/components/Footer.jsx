import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="upper">
        <div>
          <h1>Vagabond</h1>
          <p>Chart Your Journey, Craft Your Story..</p>
        </div>
        <div>
          <a href="/">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
      </div>

      <div className="lower">
        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">Download</a>
        </div>

        <div>
          <h4>Community</h4>
          <a href="/">Github</a>
          <a href="/">Twitter</a>
          <a href="/">Blog</a>
          <a href="/">Youtube</a>
        </div>

        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contact Us</a>
          <a href="/">Status</a>
        </div>

        <div>
          <h4>Others</h4>
          <a href="/">Terms Of Services</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
