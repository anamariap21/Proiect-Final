import Head from "next/head";
import React from "react";
import BlogCard from "../components/BlogCard";
import BlogCardFull from "../components/BlogCardFull";
import ContactForm from "../components/ContactForm";
import Credit from "../components/Credit";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const blogs = [
  {
    id: 1,
    title: "Cele mai bune metode de promovare online",
    image: "/images/blog1.jpg",
    date: "3/31/2021",
  },
  {
    id: 2,
    title: "Ce canale de promovare trebuie sa utilizezi in 2022",
    image: "/images/blog3.jpg",
    date: "3/24/2021",
  },
  {
    id: 3,
    title: "Cele mai bune campanii de promovare din 2022",
    image: "/images/blog4.jpg",
    date: "3/25/2021",
  },
];

export default function Blog() {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <title>Blog - Noutati - Motion Agency</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0"
        ></meta>
        <meta name="description" content="Citeste ultimele articole de la Motion Angency" />
      </Head>

      <div>
        <Navbar />
        <main className="blog container-md px-4  overflow-hidden">
          <h1 className="page_title">Ultimele Postari</h1>
          <div className="mt-5">
            <div className="row">
              <BlogCardFull />
            </div>
            <div className="row mt-5 gx-5">
              {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
        </main>

        <section className="contact mt-5" id="contact">
          <h1 className="heading">Contacteaza-ne rapid!</h1>
          <ContactForm title={"Trimite un mesaj"} btnvalue={"Trimite"} />
        </section>

        <Newsletter />
        <Credit />
      </div>
    </div>
  );
}
