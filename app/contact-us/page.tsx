import React from "react";
import ContactusHero from "../../components/contactus/contactHero";
import ContactForm from "../../components/contactus/contactForm";
import ContactDetails from "../../components/contactus/contactDetail";

const ContactUs = () => {
  return (
    <div>
      <ContactusHero></ContactusHero>
      <div className="flex flex-row gap-10 mx-auto items-center justify-center my-10">
        <ContactForm></ContactForm>
        <ContactDetails></ContactDetails>
      </div>
    </div>
  );
};

export default ContactUs;
