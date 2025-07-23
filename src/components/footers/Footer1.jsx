"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
export default function Footer1({
  paddingBottom = false,
  cloud = false,
  fullWidth = false,
  parentClass = "footer-default",
}) {
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const sendEmail = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const email = e.target.email.value;

    try {
      const response = await axios.post(
        "https://express-brevomail.vercel.app/api/contacts",
        {
          email,
        }
      );

      if ([200, 201].includes(response.status)) {
        e.target.reset(); // Reset the form
        setSuccess(true); // Set success state
        handleShowMessage();
      } else {
        setSuccess(false); // Handle unexpected responses
        handleShowMessage();
      }
    } catch (error) {
      console.error("Error:", error.response?.data || "An error occurred");
      setSuccess(false); // Set error state
      handleShowMessage();
      e.target.reset(); // Reset the form
    }
  };
  useEffect(() => {
    const headings = document.querySelectorAll(".footer-heading-mobile");

    const toggleOpen = (event) => {
      const parent = event.target.closest(".footer-col-block");
      const content = parent.querySelector(".tf-collapse-content");

      if (parent.classList.contains("open")) {
        parent.classList.remove("open");
        content.style.height = "0px";
      } else {
        parent.classList.add("open");
        content.style.height = content.scrollHeight + 10 + "px";
      }
    };

    headings.forEach((heading) => {
      heading.addEventListener("click", toggleOpen);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      headings.forEach((heading) => {
        heading.removeEventListener("click", toggleOpen);
      });
    };
  }, []); // Empty dependency array means this will run only once on mount

  return (
    <footer
      id="footer"
      className={` ${parentClass} ${
        paddingBottom ? "footer-pb-2" : "xl-pb-70"
      } ${cloud ? "footer-cloud" : ""}`}
    >
      <div className="footer-top">
        <div className={` ${fullWidth ? "container-full" : "container"}  `}>
          <div className="footer-top-wrap">
            <div className="footer-logo">
              <Link to={`/`}>
                <img
                  className="logo"
                  alt="logo"
                  src="/images/logo/eves24.png"
                  width={148}
                  height={44}
                />
              </Link>
            </div>
            <ul className="tf-social-icon style-large">
              <li>
                <a
                  href="https://www.facebook.com/"
                  className="social-item social-facebook"
                >
                  <i className="icon icon-fb" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  className="social-item social-instagram"
                >
                  <i className="icon icon-instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.snapchat.com/"
                  className="social-item social-linkedin"
                >
                  <i className="icon icon-linkedin" />
                </a>
              </li>
              <li>
                <a href="https://x.com/" className="social-item social-x">
                  <i className="icon icon-x" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-body">
        <div className={` ${fullWidth ? "container-full" : "container"}  `}>
          <div className="row-footer">
            <div className="footer-col-block s1">
              <div className="footer-heading footer-heading-mobile text-xl fw-medium">
                Business Contact
              </div>
              <div className="tf-collapse-content">
                <div className="footer-contact">
                  <ul className="footer-info">
                    <li className="item">
                      <span className="box-icon">
                        <svg
                          width={12}
                          height={14}
                          viewBox="0 0 12 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.1869 1.73431C9.06854 0.61592 7.58155 0 5.99993 0C4.4183 0 2.93129 0.61592 1.81292 1.73431C0.694534 2.85273 0.0786133 4.33969 0.0786133 5.92129C0.0786133 9.12084 3.10388 11.7821 4.72917 13.2118C4.95504 13.4105 5.15008 13.582 5.30547 13.7272C5.50016 13.9091 5.75006 14 5.9999 14C6.24979 14 6.49964 13.9091 6.69435 13.7272C6.84975 13.582 7.04479 13.4105 7.27065 13.2118C8.89594 11.7821 11.9212 9.12084 11.9212 5.92129C11.9212 4.33969 11.3053 2.85273 10.1869 1.73431ZM6.72897 12.5961C6.49816 12.7991 6.29885 12.9744 6.13451 13.1279C6.05902 13.1984 5.94078 13.1984 5.86526 13.1279C5.70095 12.9744 5.50161 12.7991 5.2708 12.596C3.74283 11.2519 0.898656 8.75001 0.898656 5.92131C0.898656 3.1085 3.18704 0.820124 5.99987 0.820124C8.81268 0.820124 11.1011 3.1085 11.1011 5.92131C11.1011 8.75001 8.25694 11.2519 6.72897 12.5961Z"
                            fill="#0D0D0D"
                          />
                          <path
                            d="M6.00008 3.08887C4.56122 3.08887 3.39062 4.25943 3.39062 5.69829C3.39062 7.13715 4.56122 8.30772 6.00008 8.30772C7.43894 8.30772 8.6095 7.13715 8.6095 5.69829C8.6095 4.25943 7.43894 3.08887 6.00008 3.08887ZM6.00008 7.48759C5.01343 7.48759 4.21072 6.68489 4.21072 5.69826C4.21072 4.71164 5.01343 3.90894 6.00008 3.90894C6.98673 3.90894 7.7894 4.71164 7.7894 5.69826C7.7894 6.68489 6.98673 7.48759 6.00008 7.48759Z"
                            fill="#0D0D0D"
                          />
                        </svg>
                      </span>
                      <a
                        target="_blank"
                        href="https://www.google.com/maps?q=123Yarranst,Punchbowl,NSW2196,Australia"
                      >
                        123 Yarran st, Punchbowl, NSW 2196, Australia
                      </a>
                    </li>
                    <li className="item">
                      <span className="box-icon">
                        <svg
                          width={14}
                          height={14}
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.6666 9.4091L10.9841 8.4641C10.7324 8.12417 10.3574 7.89649 9.93972 7.82996C9.522 7.76343 9.09484 7.86335 8.74998 8.10827L8.09081 8.59243C7.13399 7.73698 6.36526 6.69214 5.83331 5.5241L6.49248 5.04577C6.837 4.79478 7.06794 4.41741 7.13464 3.99641C7.20135 3.5754 7.09838 3.14513 6.84831 2.79993L6.18331 1.86077C5.93339 1.51663 5.55703 1.28582 5.13698 1.21909C4.71693 1.15236 4.28757 1.25518 3.94331 1.50493L2.91664 2.23993C2.58681 2.47798 2.33009 2.80349 2.17547 3.17972C2.02086 3.55595 1.9745 3.96792 2.04164 4.3691C2.33803 6.09644 3.02915 7.73206 4.06118 9.14856C5.0932 10.5651 6.43827 11.7242 7.99164 12.5358C8.30603 12.696 8.65376 12.78 9.00664 12.7808C9.46814 12.7804 9.91756 12.6333 10.29 12.3608L11.3108 11.6666C11.4837 11.5428 11.6302 11.3858 11.7419 11.2048C11.8535 11.0238 11.9281 10.8224 11.9612 10.6123C11.9943 10.4023 11.9853 10.1877 11.9347 9.98113C11.8842 9.77457 11.793 9.58012 11.6666 9.4091ZM10.7975 10.9433L9.78248 11.6666C9.58631 11.8098 9.35413 11.8954 9.11199 11.914C8.86984 11.9325 8.62732 11.8832 8.41164 11.7716C6.97557 11.0225 5.73227 9.95129 4.779 8.6418C3.82572 7.33231 3.18832 5.82004 2.91664 4.22327C2.87745 3.98261 2.90577 3.73579 2.99846 3.51026C3.09114 3.28473 3.24455 3.08933 3.44164 2.94577L4.45664 2.21077C4.6131 2.09841 4.80765 2.05252 4.99783 2.08312C5.188 2.11373 5.35834 2.21833 5.47164 2.3741L6.15998 3.3191C6.27119 3.47659 6.31717 3.67098 6.28831 3.8616C6.27352 3.95579 6.24012 4.04608 6.19004 4.12721C6.13996 4.20834 6.07421 4.27867 5.99664 4.3341L5.05164 5.02243C4.97248 5.07857 4.91486 5.16007 4.88834 5.25342C4.86182 5.34678 4.86798 5.44639 4.90581 5.53577C5.52168 7.06896 6.5077 8.42575 7.77581 9.48493C7.85256 9.54453 7.94697 9.57689 8.04414 9.57689C8.14132 9.57689 8.23573 9.54453 8.31248 9.48493L9.25748 8.80243C9.41322 8.68947 9.60729 8.64263 9.79741 8.67214C9.98754 8.70164 10.1583 8.80508 10.2725 8.95993L10.9608 9.9166C11.072 10.0741 11.118 10.2685 11.0891 10.4591C11.0752 10.5552 11.0422 10.6475 10.9921 10.7306C10.942 10.8137 10.8759 10.886 10.7975 10.9433Z"
                            fill="#0D0D0D"
                          />
                        </svg>
                      </span>
                      <a href="tel:18888383022">(64) 8342 1245</a>
                    </li>
                    <li className="item">
                      <span className="box-icon">
                        <svg
                          width={14}
                          height={14}
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.8125 2.625H2.1875C1.8394 2.625 1.50556 2.76328 1.25942 3.00942C1.01328 3.25556 0.875 3.5894 0.875 3.9375V10.0625C0.875 10.4106 1.01328 10.7444 1.25942 10.9906C1.50556 11.2367 1.8394 11.375 2.1875 11.375H11.8125C12.1606 11.375 12.4944 11.2367 12.7406 10.9906C12.9867 10.7444 13.125 10.4106 13.125 10.0625V3.9375C13.125 3.5894 12.9867 3.25556 12.7406 3.00942C12.4944 2.76328 12.1606 2.625 11.8125 2.625ZM11.5675 3.5L7.28 7.07438C7.20139 7.13985 7.10231 7.17571 7 7.17571C6.89769 7.17571 6.79861 7.13985 6.72 7.07438L2.4325 3.5H11.5675ZM11.8125 10.5H2.1875C2.07147 10.5 1.96019 10.4539 1.87814 10.3719C1.79609 10.2898 1.75 10.1785 1.75 10.0625V4.06875L6.16 7.74375C6.39584 7.94019 6.69307 8.04776 7 8.04776C7.30693 8.04776 7.60416 7.94019 7.84 7.74375L12.25 4.06875V10.0625C12.25 10.1785 12.2039 10.2898 12.1219 10.3719C12.0398 10.4539 11.9285 10.5 11.8125 10.5Z"
                            fill="#0D0D0D"
                          />
                        </svg>
                      </span>
                      support@example.com
                    </li>
                  </ul>
                  <a
                    href="https://www.google.com/maps?q=15Yarranst,Punchbowl,NSW,Australia"
                    className="tf-btn btn-line-dark fw-normal"
                  >
                    <span className="text-sm"> Get Direction </span>
                    <i className="icon-arrow-top-left fs-8" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-inner-wrap footer-col-block s2">
              <div className="footer-heading footer-heading-mobile text-xl fw-medium">
                Subscribe Newsletter
              </div>
              <div className="tf-collapse-content">
                <div className="footer-newsletter">
                  <p>
                    We invite you to register to read the latest news, offers
                    and events about our company. We promise not spam your
                    inbox.
                  </p>
                  <div
                    className={`tfSubscribeMsg  footer-sub-element ${
                      showMessage ? "active" : ""
                    }`}
                  >
                    {success ? (
                      <p style={{ color: "rgb(52, 168, 83)" }}>
                        You have successfully subscribed.
                      </p>
                    ) : (
                      <p style={{ color: "red" }}>Something went wrong</p>
                    )}
                  </div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      sendEmail(e);
                    }}
                    id="subscribe-form"
                    className="form-newsletter"
                  >
                    <div className="subscribe-content">
                      <fieldset className="email">
                        <input
                          type="email"
                          name="email"
                          className="subscribe-email"
                          placeholder="Email address"
                          tabIndex={0}
                          aria-required="true"
                          required
                        />
                      </fieldset>
                      <div className="button-submit">
                        <button
                          className="subscribe-button animate-btn"
                          type="submit"
                        >
                          <svg
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_5296_3345)">
                              <path
                                d="M17.7938 8.50229L17.7931 8.50162L14.1192 4.84537C13.8439 4.57147 13.3988 4.57249 13.1248 4.84776C12.8508 5.123 12.8519 5.56818 13.1271 5.84212L15.5938 8.29687H0.703125C0.314789 8.29687 0 8.61166 0 9C0 9.38833 0.314789 9.70312 0.703125 9.70312H15.5938L13.1272 12.1579C12.8519 12.4318 12.8509 12.877 13.1248 13.1522C13.3988 13.4275 13.844 13.4285 14.1192 13.1546L17.7932 9.49837L17.7938 9.4977C18.0692 9.22285 18.0683 8.77623 17.7938 8.50229Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_5296_3345">
                                <rect width={18} height={18} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="footer-inner-wrap s3">
              <div className="footer-col-block inner-col">
                <div className="footer-heading footer-heading-mobile text-xl fw-medium">
                  About Us
                </div>
                <div className="tf-collapse-content">
                  <ul className="footer-menu-list">
                    <li>
                      <Link to={`/about-us`}>About Us</Link>
                    </li>
                    <li>
                      <Link to={`/contact-us`}>Contact Us</Link>
                    </li>
                    <li>
                      <Link to={`/store-location`}>Our Store</Link>
                    </li>
                    <li>
                      <Link to={`/about-us`}>Our Story</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-col-block inner-col">
                <div className="footer-heading footer-heading-mobile text-xl fw-medium">
                  Resource
                </div>
                <div className="tf-collapse-content">
                  <ul className="footer-menu-list">
                    <li>
                      <Link to={`/privacy-policy`}>Privacy Policies</Link>
                    </li>
                    <li>
                      <Link to={`/term-and-condition`}>
                        Terms &amp; Conditions
                      </Link>
                    </li>

                    <li>
                      <Link to={`/return-and-refund`}>
                        Returns &amp; Refunds
                      </Link>
                    </li>
                    <li>
                      <Link to={`/faq`}>FAQ’s</Link>
                    </li>
                    <li>
                      <Link to={`/shipping`}>Shipping</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-wrap">
            <p className="text-dark">
              Copyright © 2025 by <span className="fw-medium">Eves24.</span> All
              Rights Reserved. Crafted By Web Techneeq
            </p>
            <ul className="tf-payment">
              <li className="item">
                <p>Privacy Policy</p>
              </li>
              <li className="item">
                <p>Terms of Use</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
