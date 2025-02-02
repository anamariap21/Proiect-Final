
import React from "react";

export default function BlogCard({ blog }) {
  return (
    <>
      <div className="col-md-4">
        <div class="card rounded-3 overflow-hidden">
          <img src={blog.image} class="card-img-top" alt="blog mk" />
          <div class="card-body p-0">
            <div className="bg-blog-content p-3 ">
              <a href="#">
                <a>
                  <h5 className="text-uppercase mk-guide">Blog de Markeing</h5>
                  <div className="card-date">3/31/21</div>
                  <h1 className="blog-title mt-3">{blog.title}</h1>
                </a>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
