'use client';

import Image from 'next/image';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { whyus } from '@/public/images/images';

const formSchema = z.object({
  name: z
    .string({})
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters'),
  email: z.string({}).email(),
  message: z
    .string({})
    .min(100, 'Message must be at least 100 characters')
    .max(500, 'Message cannot exceed 50 characters'),
});

const ContactUs: React.FC = ({}) => {
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    form.reset();
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  return (
    <div className='wrapper flex items-center justify-between flex-col md:flex-row gap-6 md:gap-10 lg:gap-14 py-20'>
      <div className='flex flex-col gap-4 w-[500px]'>
        <h2 className='font-extrabold text-4xl text-primary-500 pb-2'>
          Leave us a message
        </h2>
        <div className='w-full'>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='space-y-6 w-full'
            >
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-md'>Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='John Doe'
                        {...field}
                        className='text-md border-gray-200 placeholder:text-gray-300'
                      />
                    </FormControl>
                    <FormMessage className='text-red-500' />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-md'>Email</FormLabel>
                    <FormControl>
                      <Input placeholder='john.doe@mail.com' {...field} className='text-md border-gray-200 placeholder:text-gray-300'/>
                    </FormControl>
                    <FormMessage className='text-red-500' />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='message'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-md'>Username</FormLabel>
                    <FormControl>
                      <Textarea rows={6} placeholder='We would like to work with you...' {...field} className='text-md border-gray-200 placeholder:text-gray-300' />
                    </FormControl>
                    <FormMessage className='text-red-500' />
                  </FormItem>
                )}
              />
              <Button type='submit' size={'lg'} className='text-lg bg-green-500 hover:bg-green-600 w-full text-white'>Submit</Button>
            </form>
          </Form>
        </div>
      </div>
      <Image
        src={whyus}
        alt='model couple'
        className='hidden md:inline w-full md:w-[300px] lg:w-[400px] transition-all'
        priority={true}
      />
    </div>
  );
};

export default ContactUs;
