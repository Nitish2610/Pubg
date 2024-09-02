import React, { useEffect } from "react";

function TermsAndConditions() {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-800 text-white min-h-screen py-10 px-6 md:px-12">
      <div className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600">
          Terms and Conditions
        </h1>
        <p className="text-lg leading-relaxed mb-6">
          Welcome to CosmicPlayground! By accessing or using our website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
        </p>

        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Eligibility</h2>
          <p className="text-base leading-relaxed">
            You must be at least 18 years old or have parental consent to participate in our contests. By registering, you confirm that you meet these requirements.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Registration</h2>
          <p className="text-base leading-relaxed">
            To participate in our contests, you must create an account. Ensure that the information you provide is accurate and up-to-date. You are responsible for maintaining the confidentiality of your account credentials.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Contest Rules</h2>
          <p className="text-base leading-relaxed">
            All contests on CosmicPlayground are governed by specific rules. Please read and understand these rules before participating. We reserve the right to modify or cancel contests at any time without prior notice.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Payments and Refunds</h2>
          <p className="text-base leading-relaxed">
            Entry fees for contests must be paid as specified. All payments are final, and no refunds will be issued, except in cases where a contest is canceled by CosmicPlayground.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">User Conduct</h2>
          <p className="text-base leading-relaxed">
            You agree not to engage in any activity that could harm or disrupt the website or other users. Any form of cheating, hacking, or fraudulent behavior will result in immediate disqualification and potential account suspension.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Privacy</h2>
          <p className="text-base leading-relaxed">
            Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
          <p className="text-base leading-relaxed">
            CosmicPlayground is not responsible for any damages, losses, or injuries that may occur as a result of your participation in our contests. Participation is at your own risk.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Termination</h2>
          <p className="text-base leading-relaxed">
            We reserve the right to suspend or terminate your account if you violate these Terms and Conditions or engage in any conduct that we deem harmful to the platform.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
          <p className="text-base leading-relaxed">
            We may update these Terms and Conditions from time to time. Please review this page regularly to stay informed of any changes.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-base leading-relaxed">
            If you have any questions or concerns about these Terms and Conditions, please contact us at [insert contact information].
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;
