import { footerLinks } from "../../constants";
import { logo,instagram,facebook,twitter,linkedin } from "../../assets";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <section className={styles.container}>
      <div className={styles.footerContainer}>
        <div className={styles.left}>
          <img src={logo} alt="" />
          <p>A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div className={styles.linksContainer}>
          {footerLinks.map((footerlink) => (
            <div key={footerlink.title} className={styles.footerLink}>
              <h4>{footerlink.title}</h4>
              <ul>
                {footerlink.links.map((link, index) => (
                  <li className = {styles.linksName} key={index}>{link.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>Copyright © 2021 HooBank. All Rights Reserved.</p>
        <div className={styles.footerImg}>
          <img src={instagram} alt="" />
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={linkedin} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
