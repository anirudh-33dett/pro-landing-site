import React from "react";

const ContactDetails = () => {
  return (
    <div className="h-[562px] w-[482px] rounded-lg p-6 bg-white">
      <h2 className="text-xl font-bold mb-6">Contact Information</h2>

      <div className="space-y-6">
        <div>
          <h3 className="font-medium text-gray-800 mb-1">Email</h3>
          <a
            href="mailto:info@qpiai.tech"
            className="text-gray-600 hover:text-purple-700"
          >
            pro-support@qpiai.tech
          </a>
        </div>

        <div>
          <h3 className="font-medium text-gray-800 mb-1">Phone</h3>
          <a
            href="tel:+919547883847"
            className="text-gray-600 hover:text-purple-700"
          >
            +91 9035069453
          </a>
        </div>

        <div className="mt-6">
          <div className="w-full h-64 bg-gray-200 rounded-md">
            {/* Map placeholder - in a real implementation, you'd integrate Google Maps or similar */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Map location would be displayed here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
