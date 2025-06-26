
import React, { useState, lazy, Suspense } from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import ScrollReveal from '@/components/ScrollReveal';
import { LogIn, User, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, NAV_LINKS } from '@/constants';

const Minimal3DScene = lazy(() => import('@/components/3d/Minimal3DScene'));

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    if (email === 'client@alvaio.com' && password === 'password123') {
      alert('Login successful! Redirecting to dashboard...');
      // history.push('/dashboard'); 
    } else {
      setError('Invalid credentials. Please try again.');
    }
    console.log('Login attempt:', { email, password });
  };

  return (
    <SectionWrapper 
      id="login" 
      bgClassName="min-h-screen flex flex-col items-center justify-center py-12 bg-gradient-to-br from-gray-100 via-gray-50 to-indigo-100 dark:from-gray-800 dark:via-gray-900 dark:to-deep-purple"
      containerClassName="container mx-auto px-4 sm:px-6 lg:px-8 w-full" // Allow full width for centering
    >
      <div className="w-full max-w-md"> {/* Max width container for the form itself */}
        <ScrollReveal className="w-full">
          <div className="bg-white dark:bg-dark-card p-8 md:p-10 rounded-xl shadow-2xl">
            <div className="text-center mb-8">
              <Link to="/" className="inline-block mb-4">
                 <span className="text-3xl font-bold bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent gradient-text">
                  {COMPANY_INFO.name}
                </span>
              </Link>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">Client Portal Login</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Access your support tickets and reports.</p>
            </div>

             <div className="mb-8 h-32"> {/* Placeholder for 3D scene */}
                <Suspense fallback={<div className="suspense-fallback">Loading 3D Key...</div>}>
                    <Minimal3DScene meshShape="box" meshColor="#FFD700" cameraPosition={[0,0,2.5]} canvasStyle={{height: '100px'}} />
                </Suspense>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 dark:border-gray-600 rounded-md placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm dark:bg-gray-700 dark:text-white"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password"className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 dark:border-gray-600 rounded-md placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm dark:bg-gray-700 dark:text-white"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              
              {error && (
                <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-brand-primary focus:ring-brand-secondary border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:ring-offset-gray-800"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-medium text-brand-primary hover:text-brand-secondary dark:text-brand-accent dark:hover:text-brand-accent/80">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-brand-primary to-brand-secondary hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-opacity"
                >
                  <LogIn size={20} className="mr-2" /> Sign in
                </button>
              </div>
            </form>
            
            <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
              Not a client yet?{' '}
              <Link to={NAV_LINKS['contact-us']} className="font-medium text-brand-primary hover:text-brand-secondary dark:text-brand-accent dark:hover:text-brand-accent/80">
                Contact us to get started <ArrowRight size={14} className="inline"/>
              </Link>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
};

export default LoginPage;
