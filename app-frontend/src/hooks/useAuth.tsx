import { useState } from 'react';
import axios from 'axios';

interface LoginParams {
  email: string;
  password: string;
}

interface RegisterParams extends LoginParams {
  name: string;
}

export function useLogin() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const login = async ({ email, password }: LoginParams): Promise<any | undefined> => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post('/api/auth/login', { email, password });
      return res.data;
    } catch (e: any) {
      setError(e.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
}

export function useRegister() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const register = async ({ name, email, password }: RegisterParams): Promise<any | undefined> => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post('/api/auth/register', { name, email, password });
      return res.data;
    } catch (e: any) {
      setError(e.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error };
}