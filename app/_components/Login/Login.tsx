'use client'
import React, { useState } from 'react'
import Header from '../Header'
import Text from '../Text'
import Input from '../Inputs'
import Button from '../Buttons/Button'
import Notify from '@/app/lib/notify'
import { AuthError } from 'next-auth'
import { SignIn } from '@/app/lib/action'
import { SignupProps } from '@/app/features/auth/auth.interface'
import { signupSchema } from '@/app/validationSchemas'
import { useFormik } from 'formik'
import { useRegisterMutation } from '@/app/features/auth/authService'
import { FaEye, FaEyeSlash, FaRegUser } from 'react-icons/fa'
import { MdMarkEmailUnread } from 'react-icons/md'

const Login = () => {
  const { mutateAsync, isPending } = useRegisterMutation()
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState)
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      fullName: '',
    },
    validateOnBlur: true,
    validationSchema: signupSchema,
    onSubmit: async (values: SignupProps) => {
      try {
        await mutateAsync({
          fullName: values.fullName,
          password: values.password,
          role: 'user',
          email: values.email,
        })
        await SignIn(values)
      } catch (error) {
        console.log(error)
        if (error instanceof AuthError) {
          switch (error.type) {
            case 'CredentialsSignin':
              return Notify({ type: 'error', text: 'Invalid Credentials' })
            default:
              return Notify({ type: 'error', text: 'Something went wrong' })
          }
        }
        throw error
      }
    },
  })

  return (
    <div className="text-gray-800 flex flex-col max-w-[400px]  p-10 items-center justify-center bg-white rounded-lg">
      <Header text="Get Started today!" />
      <Text text="Find your test. Engage your teacher. Build your career. Do it again with E-test platform!" textPosition='text-center' />
      <form action="" className="w-full flex gap-4 flex-col">
        <div className="mt-[15px] text-gray-700 flex flex-col gap-4 w-full">
          <Input
            bgColor="bg-white"
            label="Full Name"
            name="fullName"
            width="w-full"
            placeholder="Enter full name"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            height="h-10 rounded-md"
            trailingIcon={<FaRegUser className="text-[#9E9E9E]" />}
          />
        </div>
        <div className="mt-[15px] text-gray-700 flex flex-col gap-4 w-full">
          <Input
            bgColor="bg-white"
            label="Email"
            name="email"
            width="w-full"
            placeholder="@example.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            height="h-10 rounded-md"
            trailingIcon={<MdMarkEmailUnread className="text-[#9E9E9E]" />}
          />
        </div>
        <div className="mt-[16px] w-full text-gray-700">
          <Input
            label="Password"
            width="w-full"
            height="h-10 rounded-md"
            bgColor="bg-white"
            trailingIcon={
              showPassword ? (
                <FaEye className="text-[#9E9E9E]" />
              ) : (
                <FaEyeSlash className="text-[#9E9E9E]" />
              )
            }
            name="password"
            value={formik.values.password}
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            trailingClick={togglePasswordVisibility}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="flex flex-col items-center justify-between w-full gap-4 text-center lg:justify-center mt-4">
          <Button
            loading={isPending}
            type="submit"
            label="Sign up"
            width="w-full"
            buttonStyle="custom"
            height="h-10"
            customClasses="bg-base text-white border border-gray-400 hover:border-black rounded-[12px]"
          />
        </div>
      </form>
    </div>
  )
}

export default Login
