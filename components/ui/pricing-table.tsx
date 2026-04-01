import React from 'react';

interface DomainPricing {
  tld: string;
  duration: string;
  registration: string;
  renewal: string;
  transfer: string;
}

interface PricingTableProps {
  domains: DomainPricing[];
  onRegister?: (domain: DomainPricing) => void;
}

export const PricingTable: React.FC<PricingTableProps> = ({
  domains,
  onRegister
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-primary">
              <th className="px-6 py-4 text-left text-sm font-medium text-white uppercase tracking-wider">
                TLD
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-white uppercase tracking-wider">
                Duration
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-white uppercase tracking-wider">
                Registration
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-white uppercase tracking-wider">
                Renewal
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-white uppercase tracking-wider">
                Transfer
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-white uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {domains.map((domain, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-dark">
                  {domain.tld}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-dark">
                  {domain.duration}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-dark">
                  {domain.registration}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-dark">
                  {domain.renewal}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-dark">
                  {domain.transfer}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {onRegister && (
                    <button
                      onClick={() => onRegister(domain)}
                      className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                    >
                      Register
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {domains.length === 0 && (
        <div className="px-6 py-12 text-center">
          <p className="text-muted">No domain pricing available.</p>
        </div>
      )}
    </div>
  );
};