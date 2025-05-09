import React from "react";

const ContactusHero = () => {
  return (
    <div
      className="w-full py-30"
      style={{
        background: "linear-gradient(#4C00FE, #2A008CE5)",
      }}
    >
      <div className="container mx-auto text-center px-4 flex flex-col items-center justify-center">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl max-w-[440px] min-h-[72px] text-center mx-auto flex items-center justify-center py-2 px-6">
            <h1 className="inline-flex items-baseline flex-row">
              <p className="text-4xl md:text-5xl font-bold">Contact</p>
              <p className="text-4xl md:text-5xl font-bold pl-2">Us</p>
            </h1>
          </div>
          <p className="text-lg md:text-xl text-white mt-4">
            Get in touch with our team for support, demos, or inquiries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactusHero;
