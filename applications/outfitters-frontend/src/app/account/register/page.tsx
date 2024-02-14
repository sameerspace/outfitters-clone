'use client';

import Spinner from '@/components/Spinner/Spinner';
import apiClient from '@/configs/axios.config';
import { RegisterSchema } from '@/validations/register.schema';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const Page = () => {
  const router = useRouter();

  const submitForm = async (values: object, setSubmitting: Function) => {
    try {
      await apiClient.post('/auth/register', values, {
        headers: { 'Content-Type': 'application/json' },
      });
      setSubmitting(false);
      router.replace('/');
    } catch (error: any) {
      setSubmitting(false);
      toast.error(error.response.data.message);
    }
  };

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
      onSubmit={(values, { setSubmitting }) => submitForm(values, setSubmitting)}
      validationSchema={RegisterSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="flex justify-center h-[38rem] ">
            <div className="flex flex-col w-[19rem] md:w-[28rem] max-w-[47.8rem] pt-20 items-center">
              <h1 className="font-bold text-[2.5rem] mb-14">Create Account</h1>
              <Field
                className="px-4 py-[12px] w-full mb-4 border border-black"
                name="firstName"
                placeholder="First Name"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-600"
              />
              <Field
                className="px-4 py-[12px] w-full mb-4 border border-black"
                placeholder="Last Name"
                name="lastName"
              />
              <Field
                className="px-4 py-[12px] w-full mb-4 border border-black"
                placeholder="Email"
                name="email"
              />
              <Field
                className="px-4 py-[12px] w-full mb-4 border border-black"
                placeholder="password"
                name="password"
                type="password"
              />
              <div className="flex py-8 flex-col items-center">
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <Spinner /> : <div>Create</div>}
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Page;
