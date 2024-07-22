'use client'
import Button from '@/app/_components/Buttons/Button'
import Header from '@/app/_components/Header'
import Input from '@/app/_components/Inputs'
import Text from '@/app/_components/Text'
import TextWithLinks from '@/app/_components/Text/TextWithLinks';
import { SignIn } from '@/app/lib/action'
import Notify from '@/app/lib/notify'
import { LoginProps } from '@/app/types'
import { loginSchema } from '@/app/validationSchemas'
import { useFormik } from 'formik'
import { AuthError } from 'next-auth'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaRegUser } from 'react-icons/fa'

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState)
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnBlur: true,
    validationSchema: loginSchema,
    onSubmit: async (values: LoginProps) => {
      try {
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
    <div className="w-[80%] flex flex-col items-start gap-3">
      <Header text="Welcome back" />
      <Text text="Welcome back! please enter your details" />
      <form onSubmit={formik.handleSubmit} className="w-full bg-white">
        <div className="mt-[15px] text-gray-700 flex flex-col gap-4 w-full">
          <Input
            bgColor="bg-white"
            label="Email"
            name="email"
            width="w-full"
            placeholder="sundaystanley@example.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            height="h-10 rounded-md"
            trailingIcon={<FaRegUser className="text-[#9E9E9E]" />}
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
        <Link
          href="/auth/forgot-password"
          className="w-full my-4 items-center justify-end text-base flex"
        >
          Forgot password?
        </Link>
        <div className="flex flex-col items-center justify-between w-full gap-4 text-center lg:justify-center mt-4">
          <Button
            type="submit"
            label="Sign in"
            width="w-full"
            buttonStyle="custom"
            height="h-10"
            customClasses="bg-base text-white border border-gray-400 hover:border-black rounded-[12px]"
          />
        </div>
        <div className="w-full flex mt-6">
          <TextWithLinks
            text="Don't have an account?"
            linkLabel="Sign up"
            linkRoute="/auth/signup"
          />
        </div>
      </form>
    </div>
  )
}

export default LoginPage
