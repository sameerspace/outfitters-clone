'use client';

import Spinner from '@/components/Spinner/Spinner';
import apiClient from '@/configs/axios.config';
import { LoginUserRequest, UserAuthResponse } from '@/types/user.interface';
import { setToken } from '@/utils/token';
import { LoginSchema } from '@/validations/auth.schema';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const Page = () => {
  const router = useRouter();

  const submitForm = async (
    values: LoginUserRequest,
    setSubmitting: Function,
  ) => {
    try {
      const { data } = await apiClient.post<any, { data: UserAuthResponse }>(
        '/auth/login',
        values,
      );
      setToken(data.access_token);
      router.replace('/');
    } catch (error: any) {
      setSubmitting(false);
      toast.error(error.response.data.message);
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, { setSubmitting }) =>
        submitForm(values, setSubmitting)
      }
      validationSchema={LoginSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="flex justify-center h-[38rem] ">
            <div className="flex flex-col w-[19rem] md:w-[28rem]  max-w-[47.8rem] pt-20 items-center">
              <h1 className="font-bold text-[2.5rem] mb-14">Login</h1>
              <Field
                className="px-4 py-[12px] w-full mb-4 border border-black"
                placeholder="Email"
                name="email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600"
              />
              <Field
                className="px-4 py-[12px] w-full mb-4 border border-black"
                placeholder="Password"
                type="password"
                name="password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-600"
              />
              <div className="flex items-start w-full">
                <p className="text-base">FORGOT YOUR PASSWORD?</p>
              </div>
              <div className="flex py-8 flex-col items-center">
                {isSubmitting ? (
                  <Spinner />
                ) : (
                  <button
                    type="submit"
                    className="bg-black text-white px-6 py-2 w-full active:bg-gray-400"
                  >
                    Sign In
                  </button>
                )}
                <Link
                  href="/account/register"
                  className="text-xl font-light pt-4 w-full"
                >
                  CREATE ACCOUNT
                </Link>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Page;
