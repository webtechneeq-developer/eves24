"use client";
import { blogPosts7 } from "@/data/blogs";

import { Link } from "react-router-dom";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Blogs() {
  return (
    <section className="flat-spacing-29">
      <div className="container">
        <div className="flat-title wow fadeInUp">
          <div className="title display-lg-3 font-9 fw-normal">
            Latest Tips &amp; Trends
          </div>
          <p className="desc text-main text-md font-9">
            Discover expert advice, style inspiration, and product updates on
            our blog.
          </p>
        </div>

        {/* <div className="footer-top">
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
              <p></p>
            </div>
          </div>
        </div> */}
        <div className="hover-sw-nav wrap-pos-nav">
          {blogPosts7.map((post, index) => (
            <div className="blog-item-v2">
              <div className="entry-image hover-img">
                <Link to={`/blog-single`} className="image-box img-style">
                  <img src={post.image} alt="image" width={696} height={644} />
                </Link>
                <div className="entry-tag">
                  <span className="tag font-9">Fashion, Liftstyle</span>
                </div>
              </div>
              <div className="entry-content">
                <div className="info-box">
                  <ul className="meta-list">
                    <li className="item font-9">by {post.author}</li>
                    <li className="item font-9">{post.date}</li>
                    <li className="item font-9">{post.comments}</li>
                  </ul>
                  <Link
                    to={`/blog-single`}
                    className="title fw-medium link text-xl text-line-clamp-2 font-9"
                  >
                    {post.title}
                  </Link>
                  <p className="desc text-main text-sm text-line-clamp-2 font-9">
                    {post.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="d-flex d-xl-none sw-dot-default sw-pagination-new justify-content-center" />
        </div>
      </div>
    </section>
  );
}
