import Head from "next/head";
import ContactForm from "../components/ContactForm.js";
import Credit from "../components/Credit.js";
import HomeMain from "../components/HomeMain";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter.js";
import Services from "../components/Services";

export default function Home() {
  return (
    <div>
      <Head>
    
        <title>Motion Agency</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0"
        ></meta>
        <meta name="description" content="Agentia Motion Marketing iti ofera servicii complete de marketing sportiv" />
      </Head>

      <div>
        <Navbar />
        <HomeMain />
        <Services />
        <section className="contact" id="contact">
        <h1 className="heading">
          {" "}
          <span>Contact</span>
        </h1>
        <div className="row">
          <ContactForm title={"Trimite un mesaj"} btnvalue={"Trimite"} />
        </div>
      </section>
        <Newsletter />
        <Credit />
      </div>
    </div>
  );
}
