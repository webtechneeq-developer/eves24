import { Link } from "react-router-dom";
import React from "react";

export default function Login() {
  return (
    <div
      className="offcanvas offcanvas-end popup-style-1 popup-login"
      id="login"
    >
      <div className="canvas-wrapper">
        <div className="canvas-header popup-header">
          <span className="title">Log in</span>
          <button
            className="icon-close icon-close-popup"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="canvas-body popup-inner">
          <form
            action="account-page.html"
            acceptCharset="utf-8"
            className="form-login"
          >
            <div>
              <fieldset className="email mb_12">
                <input type="email" className="" placeholder="Email*" />
              </fieldset>
              <fieldset className="password">
                <input type="password" className="" placeholder="Password*" />
              </fieldset>
            </div>
            <div className="bot">
              <a
                href="#resetPass"
                data-bs-toggle="offcanvas"
                className="text text-sm text-main-2"
              >
                Forgot your password?
              </a>
              <div className="button-wrap">
                <button
                  className="subscribe-button tf-btn animate-btn d-inline-flex bg-dark-2 w-100"
                  type="submit"
                >
                  Sign in
                </button>
                <button
                  type="button"
                  data-bs-target="#register"
                  data-bs-toggle="offcanvas"
                  className="tf-btn btn-out-line-dark2 w-100"
                >
                  Create an account
                </button>
              </div>
            </div>
          </form>
          <div className="other-login">
            <p className="text-sm text-center text-main-2">Or sign in with:</p>
            <Link to={`/account-page`} className="w-100 text-md mb_8">
              <svg
                className="icon"
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={16} cy={16} r={16} fill="#3B5998" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.155 10.656L18.649 10.657C17.468 10.657 17.239 11.218 17.239 12.041V13.857H20.056L19.689 16.702H17.239V24H14.302V16.702H11.846V13.857H14.302V11.76C14.302 9.325 15.789 8 17.96 8C19 8 19.894 8.077 20.155 8.112V10.656ZM16 0C7.164 0 0 7.163 0 16C0 24.836 7.164 32 16 32C24.837 32 32 24.836 32 16C32 7.163 24.837 0 16 0Z"
                  fill="white"
                />
              </svg>
              FACEBOOK
            </Link>
            <Link to={`/account-page`} className="w-100 text-md bg-dark">
              <svg
                className="icon"
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_235_18876)">
                  <path
                    d="M30.7919 13.218L17.7394 13.2174C17.163 13.2174 16.6958 13.6845 16.6958 14.2609V18.4306C16.6958 19.0068 17.163 19.4741 17.7393 19.4741H25.0897C24.2848 21.5629 22.7825 23.3122 20.8659 24.4237L24.0001 29.8493C29.0277 26.9416 32.0001 21.8398 32.0001 16.1287C32.0001 15.3155 31.9402 14.7342 31.8203 14.0796C31.7292 13.5823 31.2974 13.218 30.7919 13.218Z"
                    fill="#167EE6"
                  />
                  <path
                    d="M16.0002 25.7392C12.4031 25.7392 9.26282 23.7738 7.57625 20.8655L2.15088 23.9926C4.91182 28.7777 10.0839 32 16.0002 32C18.9025 32 21.6411 31.2186 24.0002 29.8568V29.8494L20.866 24.4237C19.4324 25.2552 17.7734 25.7392 16.0002 25.7392Z"
                    fill="#12B347"
                  />
                  <path
                    d="M24 29.8568V29.8493L20.8658 24.4237C19.4322 25.2551 17.7733 25.7391 16 25.7391V32C18.9023 32 21.641 31.2186 24 29.8568Z"
                    fill="#0F993E"
                  />
                  <path
                    d="M6.26088 16C6.26088 14.2269 6.74475 12.5681 7.57606 11.1346L2.15069 8.00745C0.781375 10.3591 0 13.0903 0 16C0 18.9098 0.781375 21.6409 2.15069 23.9926L7.57606 20.8654C6.74475 19.4319 6.26088 17.7731 6.26088 16Z"
                    fill="#FFD500"
                  />
                  <path
                    d="M16.0002 6.26088C18.3459 6.26088 20.5005 7.09437 22.1834 8.48081C22.5986 8.82281 23.2021 8.79813 23.5824 8.41781L26.5368 5.46344C26.9683 5.03194 26.9375 4.32562 26.4766 3.92575C23.6569 1.47956 19.9881 0 16.0002 0C10.0839 0 4.91182 3.22231 2.15088 8.00744L7.57625 11.1346C9.26282 8.22625 12.4031 6.26088 16.0002 6.26088Z"
                    fill="#FF4B26"
                  />
                  <path
                    d="M22.1833 8.48081C22.5984 8.82281 23.2019 8.79813 23.5822 8.41781L26.5366 5.46344C26.968 5.03194 26.9373 4.32562 26.4764 3.92575C23.6567 1.4795 19.9879 0 16 0V6.26088C18.3456 6.26088 20.5003 7.09437 22.1833 8.48081Z"
                    fill="#D93F21"
                  />
                </g>
                <defs>
                  <clipPath>
                    <rect width={32} height={32} fill="white" />
                  </clipPath>
                </defs>
              </svg>
              GOOGLE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
