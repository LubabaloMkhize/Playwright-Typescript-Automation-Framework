// utils/logger.ts

function formatMessage(level: string, message: string) {
  const timestamp = new Date().toISOString();
  return `[${timestamp}] [${level}] ${message}`;
}

export const logger = {
  info: (message: string) => {
    console.log(formatMessage('INFO', message));
  },

  warn: (message: string) => {
    console.warn(formatMessage('WARN', message));
  },

  error: (message: string) => {
    console.error(formatMessage('ERROR', message));
  },

  debug: (message: string) => {
    console.debug(formatMessage('DEBUG', message));
  }
};