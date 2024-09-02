import React, { useEffect } from "react";

function PrivacyPolicy() {

    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className="bg-gray-800 text-white min-h-screen py-10 px-6 md:px-12">
      <div className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
          Privacy Policy
        </h1>
        <p className="text-lg leading-relaxed mb-6">
          Welcome to CosmicPlayground, a platform where you can participate in various BGMI online contests.
        </p>
        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="text-base leading-relaxed">
            To provide you with access to our services and contests, we may collect the following information:
            <ul className="list-disc list-inside ml-6">
              <li><strong>Personal Information:</strong> This includes your username, email address, and contact information.</li>
            </ul>
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Purpose and Usage</h2>
          <p className="text-base leading-relaxed">
            The information we collect is used to operate, improve, and provide our services. This includes:
            <ul className="list-disc list-inside ml-6">
              <li>Allowing you to participate in contests and access other features of our platform.</li>
              <li>Communicating with you about updates, offers, and new services.</li>
            </ul>
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
          <p className="text-base leading-relaxed">
            We use cookies and similar electronic tools to collect information and enhance your user experience. Cookies help us understand your preferences and provide personalized content. You can manage your cookie preferences through your browser settings.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Security</h2>
          <p className="text-base leading-relaxed">
            We take the security of your information seriously. Our databases are stored on secure servers protected by firewalls.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
          <p className="text-base leading-relaxed">
            Beware of deceptive communications that may falsely claim to be associated with CosmicPlayground. We will never ask for your sensitive personal information through unsolicited emails or calls. Please verify the authenticity of any communication before responding.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">User Account and Data Deletion</h2>
          <p className="text-base leading-relaxed">
            You have the right to request the deletion of your account and personal information. You may also request temporary suspension or deactivation of your account. We will respond to your request within one month. Please note that permanent account deletion will result in the loss of access to our platform and services.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Updating Information</h2>
          <p className="text-base leading-relaxed">
            You are responsible for keeping your personal information up to date. You can review and update your information by logging into your profile on our platform.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-base leading-relaxed">
            If you have any questions or concerns about this Privacy Policy, please contact us at [your contact information here].
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
