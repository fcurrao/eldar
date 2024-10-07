export interface AuthState {
    user: {
      role: 'user' | 'admin' | null;
      token: string | null;
    };
  }