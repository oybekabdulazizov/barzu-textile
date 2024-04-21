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
import { contactus } from '@/public/assets/images';

const formSchema = z.object({
  name: z
    .string({})
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters'),
  email: z.string({}).email(),
  message: z
    .string({})
    .min(100, 'Message must be at least 100 characters')
    .max(500, 'Message cannot exceed 500 characters'),
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

  const camelCase = (str: string) => {
    return str.slice(0, 1).toLocaleUpperCase() + str.slice(1);
  };

  return (
    <div
      id='contact-us'
      className='wrapper flex items-center justify-between flex-col md:flex-row gap-6 md:gap-10 lg:gap-14 py-20'
    >
      <div className='flex flex-col gap-4 w-full sm:w-[400px] md:w-[500px] transition-all'>
        <h2 className='font-extrabold text-2xl md:text-3xl lg:text-4xl text-primary-500 pb-2'>
          Leave us a message
        </h2>
        <div className='w-full'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-md'>
                      {camelCase(field.name)}
                    </FormLabel>
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
                    <FormLabel className='text-md'>
                      {camelCase(field.name)}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder='john.doe@mail.com'
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
                name='message'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-md'>
                      {camelCase(field.name)}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        rows={6}
                        placeholder='We would like to work with you...'
                        {...field}
                        className='text-md border-gray-200 placeholder:text-gray-300'
                      />
                    </FormControl>
                    <FormMessage className='text-red-500' />
                  </FormItem>
                )}
              />
              <Button
                type='submit'
                size={'lg'}
                className='text-lg bg-green-500 hover:bg-green-600 w-full text-white'
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <Image
        src={contactus}
        alt=''
        className='hidden md:inline w-full md:w-[300px] lg:w-[400px] transition-all'
        priority={true}
      />
    </div>
  );
};

export default ContactUs;
