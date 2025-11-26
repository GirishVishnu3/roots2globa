/**
 * Error Tracking Utility
 * Centralized error logging and tracking
 */

interface ErrorContext {
  userId?: string;
  path?: string;
  userAgent?: string;
  [key: string]: any;
}

class ErrorTracker {
  private isProduction = process.env.NODE_ENV === 'production';
  private errorTrackingEnabled = process.env.NEXT_PUBLIC_ERROR_TRACKING_ENABLED === 'true';

  /**
   * Log an error with context
   */
  logError(error: Error | unknown, context?: ErrorContext): void {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : undefined;

    // In production, send to error tracking service
    if (this.isProduction && this.errorTrackingEnabled) {
      // TODO: Integrate with error tracking service (Sentry, LogRocket, etc.)
      // Example: Sentry.captureException(error, { extra: context });
      
      // For now, log to console with structured format
      console.error('[ERROR]', {
        message: errorMessage,
        stack: errorStack,
        context,
        timestamp: new Date().toISOString(),
      });
    } else {
      // In development, use console.error
      console.error('Error:', errorMessage, context);
      if (errorStack) {
        console.error('Stack:', errorStack);
      }
    }
  }

  /**
   * Log a warning
   */
  logWarning(message: string, context?: ErrorContext): void {
    if (this.isProduction && this.errorTrackingEnabled) {
      // TODO: Send to error tracking service
      console.warn('[WARNING]', { message, context, timestamp: new Date().toISOString() });
    } else {
      console.warn('Warning:', message, context);
    }
  }

  /**
   * Log info (for debugging)
   */
  logInfo(message: string, context?: ErrorContext): void {
    if (!this.isProduction) {
      console.log('[INFO]', message, context);
    }
  }
}

// Export singleton instance
export const errorTracker = new ErrorTracker();

/**
 * Convenience function for logging errors
 */
export function logError(error: Error | unknown, context?: ErrorContext): void {
  errorTracker.logError(error, context);
}

/**
 * Convenience function for logging warnings
 */
export function logWarning(message: string, context?: ErrorContext): void {
  errorTracker.logWarning(message, context);
}

/**
 * Convenience function for logging info
 */
export function logInfo(message: string, context?: ErrorContext): void {
  errorTracker.logInfo(message, context);
}

