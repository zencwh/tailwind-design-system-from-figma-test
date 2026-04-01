import React from 'react';
import { ErrorPage } from '../ui/error-page';
import { DataTable } from '../ui/data-table';
import { PricingTable } from '../ui/pricing-table';

const sampleUsers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'active' as const,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'User',
    status: 'inactive' as const,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face'
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    role: 'Moderator',
    status: 'pending' as const
  }
];

const sampleDomains = [
  { tld: '.com', duration: '1 Year', registration: '$10.00', renewal: '$75.00', transfer: '$10.00' },
  { tld: '.net', duration: '1 Year', registration: '$8.00', renewal: '$65.00', transfer: '$20.00' },
  { tld: '.org', duration: '1 Year', registration: '$9.00', renewal: '$32.99', transfer: '$5.00' },
  { tld: '.dev', duration: '1 Year', registration: '$5.00', renewal: '$89.00', transfer: '$6.00' },
  { tld: '.info', duration: '1 Year', registration: '$7.00', renewal: '$35.00', transfer: '$10.00' },
  { tld: '.store', duration: '1 Year', registration: '$6.00', renewal: '$65.00', transfer: '$5.00' }
];

export const ComponentsShowcase: React.FC = () => {
  const handleUserAction = (action: string, user: typeof sampleUsers[0]) => {
    console.log(`${action} user:`, user);
  };

  const handleDomainRegister = (domain: typeof sampleDomains[0]) => {
    console.log('Register domain:', domain);
  };

  const handleGoHome = () => {
    console.log('Go home clicked');
  };

  return (
    <div className="space-y-12 py-12">
      {/* Error Page Preview */}
      <div>
        <h2 className="text-2xl font-bold text-dark mb-6">Error Page</h2>
        <div className="border border-gray-200 rounded-lg overflow-hidden h-96">
          <ErrorPage
            title="Page Not Found"
            message="The page you're looking for doesn't exist or has been moved."
            code="404"
            actionText="Go Home"
            onAction={handleGoHome}
          />
        </div>
      </div>

      {/* Data Table */}
      <div>
        <h2 className="text-2xl font-bold text-dark mb-6">Data Table</h2>
        <DataTable
          users={sampleUsers}
          onView={(user) => handleUserAction('View', user)}
          onEdit={(user) => handleUserAction('Edit', user)}
          onDelete={(user) => handleUserAction('Delete', user)}
        />
      </div>

      {/* Pricing Table */}
      <div>
        <h2 className="text-2xl font-bold text-dark mb-6">Domain Pricing Table</h2>
        <PricingTable
          domains={sampleDomains}
          onRegister={handleDomainRegister}
        />
      </div>
    </div>
  );
};