'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SignUpFormState {
  name: string;
  email: string;
  error: string;
}

export const VendorSignUp: React.FC = () => {
  const [signUpForm, setSignUpForm] = useState<SignUpFormState>({
    name: '',
    email: '',
    error: '',
  });

  const [loginForm, setLoginForm] = useState({
    email: '',
    error: '',
  });

  const [signUpLoading, setSignUpLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);

  const handleSignUpChange = (field: keyof SignUpFormState, value: string) => {
    setSignUpForm((prev) => ({
      ...prev,
      [field]: value,
      error: '',
    }));
  };

  const handleLoginChange = (field: string, value: string) => {
    setLoginForm((prev) => ({
      ...prev,
      [field]: value,
      error: '',
    }));
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignUpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!signUpForm.name.trim()) {
      setSignUpForm((prev) => ({
        ...prev,
        error: 'Please enter your name',
      }));
      return;
    }

    if (!signUpForm.email.trim()) {
      setSignUpForm((prev) => ({
        ...prev,
        error: 'Please enter your email address',
      }));
      return;
    }

    if (!validateEmail(signUpForm.email)) {
      setSignUpForm((prev) => ({
        ...prev,
        error: 'Please enter a valid email address',
      }));
      return;
    }

    setSignUpLoading(true);
    try {
      // TODO: Replace with actual API call
      console.log('Sign up attempt:', signUpForm);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      // In real implementation, redirect to vendor registration page
      // router.push(`/vendor/register?email=${signUpForm.email}`);
    } catch {
      setSignUpForm((prev) => ({
        ...prev,
        error: 'An error occurred. Please try again.',
      }));
    } finally {
      setSignUpLoading(false);
    }
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!loginForm.email.trim()) {
      setLoginForm((prev) => ({
        ...prev,
        error: 'Please enter your email address',
      }));
      return;
    }

    if (!validateEmail(loginForm.email)) {
      setLoginForm((prev) => ({
        ...prev,
        error: 'Please enter a valid email address',
      }));
      return;
    }

    setLoginLoading(true);
    try {
      // TODO: Replace with actual API call
      console.log('Login attempt:', loginForm);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      // In real implementation, handle login logic
      // router.push('/vendor/dashboard');
    } catch {
      setLoginForm((prev) => ({
        ...prev,
        error: 'An error occurred. Please try again.',
      }));
    } finally {
      setLoginLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="border-b border-stroke py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold text-dark">Vendor Portal</h1>
          <p className="text-textMuted mt-1">Join our vendor network or access your account</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Sign Up Section */}
            <div className="bg-white border border-stroke rounded-lg p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-dark mb-2">Create a New Account</h2>
              <p className="text-textMuted mb-6 text-sm">Register your business to get started</p>

              <form onSubmit={handleSignUpSubmit} className="space-y-4">
                <Input
                  label="Full Name"
                  placeholder="Enter your full name"
                  type="text"
                  value={signUpForm.name}
                  onChange={(e) => handleSignUpChange('name', e.target.value)}
                  disabled={signUpLoading}
                  showLabel={true}
                  showHelperText={false}
                />

                <Input
                  label="Company Email Address"
                  placeholder="Enter your company email"
                  type="email"
                  value={signUpForm.email}
                  onChange={(e) => handleSignUpChange('email', e.target.value)}
                  disabled={signUpLoading}
                  status={signUpForm.error ? 'Error' : 'Default'}
                  helperText={signUpForm.error}
                  showLabel={true}
                  showHelperText={!!signUpForm.error}
                />

                <div className="pt-2">
                  <Button
                    variant="secondary"
                    type="submit"
                    disabled={signUpLoading}
                    className="w-full"
                  >
                    {signUpLoading ? 'Creating Account...' : 'Register'}
                  </Button>
                </div>
              </form>

              <p className="text-xs text-textMuted text-center mt-6">
                We'll send you a verification email at the address above
              </p>
            </div>

            {/* Login Section */}
            <div className="bg-white border border-stroke rounded-lg p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-dark mb-2">Sign In to Your Account</h2>
              <p className="text-textMuted mb-6 text-sm">Access your vendor dashboard</p>

              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <Input
                  label="Company Email Address"
                  placeholder="Enter your company email"
                  type="email"
                  value={loginForm.email}
                  onChange={(e) => handleLoginChange('email', e.target.value)}
                  disabled={loginLoading}
                  status={loginForm.error ? 'Error' : 'Default'}
                  helperText={loginForm.error}
                  showLabel={true}
                  showHelperText={!!loginForm.error}
                />

                <div className="pt-2">
                  <Button
                    variant="secondary"
                    type="submit"
                    disabled={loginLoading}
                    className="w-full"
                  >
                    {loginLoading ? 'Signing In...' : 'Login'}
                  </Button>
                </div>
              </form>

              <p className="text-xs text-textMuted text-center mt-6">
                Don't have an account? Register on the left to get started
              </p>
            </div>
          </div>
        </div>
      </main>

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