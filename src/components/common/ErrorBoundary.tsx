import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('GreenNest Realtors Client ErrorBoundary caught:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-slate-800 font-sans">
          <div className="max-w-md w-full bg-white border border-slate-200 p-8 shadow-sm text-center space-y-4">
            <div className="w-12 h-12 bg-[#305d3f]/10 text-[#305d3f] flex items-center justify-center mx-auto text-xl font-bold font-serif">
              GN
            </div>
            <h1 className="font-serif text-2xl font-bold text-[#305d3f]">
              GreenNest Realtors
            </h1>
            <p className="text-xs text-slate-600 leading-relaxed">
              We encountered a temporary interface loading issue. Please refresh the page to reload the application.
            </p>
            {this.state.error?.message && (
              <pre className="text-[11px] bg-slate-100 p-2.5 text-left text-red-700 overflow-x-auto font-mono">
                {this.state.error.message}
              </pre>
            )}
            <div className="pt-2">
              <button
                onClick={() => window.location.reload()}
                className="bg-[#305d3f] hover:bg-[#23462f] text-white text-xs font-semibold uppercase tracking-wider py-2.5 px-6 transition-colors shadow-sm cursor-pointer"
              >
                Reload Website
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
