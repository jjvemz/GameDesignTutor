// LoginForm.tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useLogin } from '../../hooks/useAuth';
import { LoginFormFields, LoginSchema } from '../../utils/schema';
import { ZodObject, ZodString, ZodTypeAny } from 'zod';

export default function LoginForm() {
  const { login, loading, error } = useLogin();
  const { register, handleSubmit, formState: { errors, isSubmitting } } =
    useForm<LoginFormFields>({
      resolver: zodResolver(LoginSchema),
      mode: 'onBlur',
    });

  const onSubmit: SubmitHandler<LoginFormFields> = async (data) => {
    await login(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <input type="email" placeholder="Email" {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}

      <input type="password" placeholder="Password" {...register('password')} />
      {errors.password && <span>{errors.password.message}</span>}

      {error && <p className="error">{error}</p>}

      <button type="submit" disabled={isSubmitting || loading}>
        {isSubmitting || loading ? 'Logging in…' : 'Login'}
      </button>
    </form>
  );
}

function zodResolver(LoginSchema: ZodObject<{ email: ZodString; password: ZodString; }, "strip", ZodTypeAny, { email: string; password: string; }, { email: string; password: string; }>): import("react-hook-form").Resolver<{ email: string; password: string; }, any, { email: string; password: string; }> | undefined {
    throw new Error('Function not implemented.');
}
