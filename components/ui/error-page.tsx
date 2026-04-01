import React from 'react';

interface ErrorPageProps {
  title?: string;
  message?: string;
  code?: string;
  actionText?: string;
  onAction?: () => void;
}

export const ErrorPage: React.FC<ErrorPageProps> = ({
  title = "Page Not Found",
  message = "The page you're looking for doesn't exist or has been moved.",
  code = "404",
  actionText = "Go Home",
  onAction
}) => {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-white mb-4">{code}</h1>
          <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
          <p className="text-white/80 text-lg leading-relaxed">{message}</p>
        </div>

        {actionText && onAction && (
          <button
            onClick={onAction}
            className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
          >
            {actionText}
          </button>
        )}
      </div>
    </div>
  );
};