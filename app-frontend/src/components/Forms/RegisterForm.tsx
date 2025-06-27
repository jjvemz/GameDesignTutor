import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRegister } from '../../hooks/useAuth';
import { RegisterSchema, RegisterFormFields } from '../../utils/schema';
import { ZodEffects, ZodObject, ZodString, ZodTypeAny } from 'zod';

export default function RegisterForm() {
  const { register: doRegister, loading, error } = useRegister();
  const { register, handleSubmit, formState: { errors, isSubmitting } } =
    useForm<RegisterFormFields>({
      resolver: zodResolver(RegisterSchema),
      mode: 'onBlur',
    });

  const onSubmit: SubmitHandler<RegisterFormFields> = async (data) => {
    await doRegister({
      name: data.name,
      email: data.email,
      password: data.password,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <input placeholder="Name" {...register('name')} />
      {errors.name && <span>{errors.name.message}</span>}

      <input type="email" placeholder="Email" {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}

      <input type="password" placeholder="Password" {...register('password')} />
      {errors.password && <span>{errors.password.message}</span>}

      <input
        type="password"
        placeholder="Confirm Password"
        {...register('confirmPassword')}
      />
      {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}

      {error && <p className="error">{error}</p>}

      <button type="submit" disabled={isSubmitting || loading}>
        {isSubmitting || loading ? 'Registering…' : 'Register'}
      </button>
    </form>
  );
}
function zodResolver(RegisterSchema: ZodEffects<ZodObject<{ name: ZodString; email: ZodString; password: ZodString; confirmPassword: ZodString; }, "strip", ZodTypeAny, { name: string; email: string; password: string; confirmPassword: string; }, { name: string; email: string; password: string; confirmPassword: string; }>, { name: string; email: string; password: string; confirmPassword: string; }, { name: string; email: string; password: string; confirmPassword: string; }>): import("react-hook-form").Resolver<{ name: string; email: string; password: string; confirmPassword: string; }, any, { name: string; email: string; password: string; confirmPassword: string; }> | undefined {
    throw new Error('Function not implemented.');
}

