import {
  SiGithub,
  SiNotion,
  SiLinkedin,
  SiInstagram,
  SiTiktok,
} from "react-icons/si";
import { GrArticle } from "react-icons/gr";
import { footerIcon, toolTipFooter } from "./Components/StyleLibrary/ClassName";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="footer mt-20 mb-10">
        <aside>
          <Link to="/portfolio">
            <img
              src="https://raw.githubusercontent.com/estherphang/portfolio/main/public/browser.png"
              width="50"
              height="50"
            />
          </Link>
          <p>
            Esther Phang
            <br />© Copyright 2024. All Rights Reserved.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <Link to="https://www.linkedin.com/in/estherpxy/">
              <div
                className={`${toolTipFooter}`}
                data-tip="LinkedIn: Professional Connections"
              >
                <SiLinkedin className={`${footerIcon}`} />
              </div>
            </Link>
            <Link to="/https://estherphang.com/">
              <div
                className={`${toolTipFooter}`}
                data-tip="Blog: Penning Perspectives"
              >
                <GrArticle className={`${footerIcon}`} />
              </div>
            </Link>
            <Link to="https://github.com/estherphang">
              <div
                className={`${toolTipFooter}`}
                data-tip="Github: Code Showcase"
              >
                <SiGithub
                  className={`${footerIcon}`}
                  data-tip="github.com/estherphang"
                />
              </div>
            </Link>
            <Link to="https://www.notion.so/esthercodes">
              <div
                className={`${toolTipFooter}`}
                data-tip="Notion: Leetcode Journey"
              >
                <SiNotion className={`${footerIcon}`} />
              </div>
            </Link>
            <Link to="https://www.instagram.com/estherp.studio/">
              <div
                className={`${toolTipFooter}`}
                data-tip="Instagram: Life in Squares"
              >
                <SiInstagram className={`${footerIcon}`} />
              </div>
            </Link>
            <Link to="https://www.tiktok.com/@estherp.studio">
              <div
                className={`${toolTipFooter}`}
                data-tip="TikTok: Unfiltered Moments"
              >
                <SiTiktok className={`${footerIcon}`} />
              </div>
            </Link>
          </div>
        </nav>
      </footer>
    </>
  );
}
