import React from 'react';

export const VendorSignupShowcase: React.FC = () => {
  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold text-dark mb-6">Vendor Sign Up Page</h2>
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <iframe
          src="/vendor-signup"
          title="Vendor Sign Up Page"
          className="w-full h-[800px] border-0"
        />
      </div>
      <p className="text-textMuted text-sm mt-4">
        Two-column layout with registration and login forms. Uses secondary buttons and validation.
      </p>
    </div>
  );
};