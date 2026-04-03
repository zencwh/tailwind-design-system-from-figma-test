'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SegmentedControl } from '@/components/ui/segmented-control';
import { Blogs } from '@/components/sections/blogs';
import { CardGridSection } from '@/components/sections/card-grid';

type AuthMode = 'sign-up' | 'sign-in';

interface FormState {
  name: string;
  email: string;
  error: string;
}

export const VendorSignUp: React.FC = () => {
  const [mode, setMode] = useState<AuthMode>('sign-up');
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    error: '',
  });
  const [loading, setLoading] = useState(false);

  const handleModeChange = (newMode: AuthMode) => {
    setMode(newMode);
    setForm({ name: '', email: '', error: '' });
  };

  const handleFormChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
      error: '',
    }));
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (mode === 'sign-up') {
      if (!form.name.trim()) {
        setForm((prev) => ({
          ...prev,
          error: 'Please enter your name',
        }));
        return;
      }
    }

    if (!form.email.trim()) {
      setForm((prev) => ({
        ...prev,
        error: 'Please enter your email address',
      }));
      return;
    }

    if (!validateEmail(form.email)) {
      setForm((prev) => ({
        ...prev,
        error: 'Please enter a valid email address',
      }));
      return;
    }

    setLoading(true);
    try {
      // TODO: Replace with actual API call
      console.log(`${mode} attempt:`, form);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      // In real implementation:
      // - For sign-up: redirect to vendor registration page
      // - For sign-in: redirect to vendor dashboard
    } catch {
      setForm((prev) => ({
        ...prev,
        error: 'An error occurred. Please try again.',
      }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="border-b border-stroke py-6 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-semibold text-dark">Vendor Portal</h1>
          <p className="text-textMuted mt-1">Access your vendor account</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Mode Selector */}
          <div className="mb-8">
            <SegmentedControl
              items={[
                { id: 'sign-up', label: 'Sign Up', active: mode === 'sign-up', onClick: () => handleModeChange('sign-up') },
                { id: 'sign-in', label: 'Sign In', active: mode === 'sign-in', onClick: () => handleModeChange('sign-in') },
              ]}
              rounded="semi"
              className="w-full"
            />
          </div>

          {/* Unified Form */}
          <div className="bg-white border border-stroke rounded-lg p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-dark mb-2">
              {mode === 'sign-up' ? 'Create a New Account' : 'Welcome Back'}
            </h2>
            <p className="text-textMuted mb-6 text-sm">
              {mode === 'sign-up'
                ? 'Register your business to get started'
                : 'Sign in to access your vendor dashboard'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name field - only visible in sign-up mode */}
              {mode === 'sign-up' && (
                <Input
                  label="Full Name"
                  placeholder="Enter your full name"
                  type="text"
                  value={form.name}
                  onChange={(e) => handleFormChange('name', e.target.value)}
                  disabled={loading}
                  showLabel={true}
                  showHelperText={false}
                />
              )}

              {/* Email field */}
              <Input
                label="Company Email Address"
                placeholder="Enter your company email"
                type="email"
                value={form.email}
                onChange={(e) => handleFormChange('email', e.target.value)}
                disabled={loading}
                status={form.error ? 'Error' : 'Default'}
                helperText={form.error}
                showLabel={true}
                showHelperText={!!form.error}
              />

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  variant="primary"
                  type="submit"
                  disabled={loading}
                  className="w-full"
                >
                  {loading
                    ? mode === 'sign-up'
                      ? 'Creating Account...'
                      : 'Signing In...'
                    : mode === 'sign-up'
                    ? 'Register'
                    : 'Login'}
                </Button>
              </div>
            </form>

            <p className="text-xs text-textMuted text-center mt-6">
              {mode === 'sign-up'
                ? "We'll send you a verification email at the address above"
                : 'Secure verification will be sent to your email'}
            </p>
          </div>
        </div>
      </main>

      {/* Blog Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <Blogs />
        </div>
      </section>

      {/* Card Grid Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <CardGridSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stroke bg-white py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-textMuted">© 2026 Vendor Portal. All rights reserved.</div>
            <div className="flex gap-4 text-sm text-textMuted">
              <a href="#" className="hover:text-dark transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-dark transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-dark transition-colors">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VendorSignUp;