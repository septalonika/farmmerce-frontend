import React from "react";

interface TermsModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ isModalOpen, closeModal }) => {
  if (!isModalOpen) return null;

  return (
    <div className="bg-opacity-60 fixed inset-0 z-50 flex items-center justify-center bg-black backdrop-blur-sm">
      <div className="w-full max-w-2xl transform rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 p-8 shadow-lg transition-all duration-300 ease-out hover:scale-105">
        {/* Modal Header */}
        <h2 className="mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-2xl font-semibold text-transparent">
          Terms and Conditions
        </h2>

        {/* Modal Content */}
        <div className="space-y-4 text-lg leading-relaxed text-gray-300">
          <p>
            Welcome to <strong>Farmmerce</strong>. By accessing or using our
            services, you agree to comply with and be bound by the following
            terms and conditions.
          </p>
          <p>
            <strong>Acceptance of Terms:</strong> By using this website, you
            agree to comply with and be bound by these terms and conditions,
            which govern your use of this website and any services or products
            offered by us.
          </p>
          <p>
            <strong>Changes to the Terms:</strong> We reserve the right to
            update or modify these terms at any time without prior notice. Any
            changes will be posted on this page.
          </p>
          <p>
            <strong>User Responsibilities:</strong> You agree to use the
            services responsibly and in accordance with applicable laws.
          </p>
          <p>
            <strong>Limitation of Liability:</strong> Farmmerce will not be
            liable for any damages arising out of your use of our services.
          </p>
          <p>
            <strong>Governing Law:</strong> These terms will be governed by the
            laws of the jurisdiction where Farmmerce operates.
          </p>
        </div>

        {/* Modal Footer with Close Button */}
        <div className="mt-8 flex justify-center">
          <button
            className="focus:ring-opacity-50 rounded-lg bg-green-500 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:outline-none"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
