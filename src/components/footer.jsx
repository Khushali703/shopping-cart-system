import css from "../css/footer.module.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer
        className={`d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top ${css.footer}`}
      >
        <div className="col-md-7 d-flex align-items-center">
          <span className={`mb-3 mb-md-0 text-body-secondary ${css.fContent}`}>
            © 2024 Smart View, Inc
          </span>
        </div>

        <ul
          className={`nav col-md-6 justify-content-end list-unstyled d-flex ${css.icons}`}
        >
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <span className="twitter">
                <FaSquareXTwitter />
              </span>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <span className="instagram">
                <FaSquareInstagram />
              </span>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <span className="facebook">
                <FaFacebook />
              </span>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};
export default Footer;
