'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '@/schemas';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { CardWrapper } from '@/components/auth/card-wrapper';
import { useForm } from 'react-hook-form';

export const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });
  return (
    <CardWrapper headerLabel='Welcome Back' backButtonLabel='Dont have an account?' backButtonHref='/auth/register' showSocial>
      LoginForm
      <Form {...form}>
        <form onSubmit={form.handleSubmit(() => {})} className='space-y-6 '></form>
      </Form>
    </CardWrapper>
  );
};

