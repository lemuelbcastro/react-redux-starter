import session from './session';
import requestCanceler from './requestCanceler';

const handler = {
  success: (config) => {
    const currentSession = session.get();

    if (currentSession && currentSession.token) {
      config.headers.authorization = `Bearer ${currentSession.token}`;
    }

    config.cancelToken = requestCanceler.token();

    return config;
  },
  error: (error) => Promise.reject(error),
};

export const { success, error } = handler;
