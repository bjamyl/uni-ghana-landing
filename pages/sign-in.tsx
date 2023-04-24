import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'

export default function SignIn() {
  return (
    <Layout>
         <section className="h-screen flex justify-center items-center">
        <div className="mx-4 xl:w-[1280px] ">
          {/* <h1 className="font-bold text-2xl mb-4 xl:text-5xl">
            Sign In to your account
          </h1> */}
          <div className="sm:grid lg:grid-cols-2 shadow-lg xl:p-8 p-4 pb-8">
            <div className="hidden xl:block">
              <Image
                src="/images/signin.jpg"
                alt="signup-image"
                height={1920}
                width={1080}
                className='object-cover'
              />
            </div>
            <div className="xl:ml-8">
              <form className="flex-col gap-2" onSubmit=''>
                <h1 className="font-bold text-2xl mb-4 xl:text-5xl">
                  Sign In to your account
                </h1>

                <div className="mb-8 sm:flex flex-col gap-6">
                  <input
                    className="focus:outline-none border w-full p-3"
                    type="text"
                    placeholder="Username"
                    name="username"
                  />
                  {/* <input
                    className="focus:outline-none border w-full p-3"
                    type="email"
                    placeholder="Enter your email"
                  /> */}
                  <input
                    className="focus:outline-none border w-full p-3"
                    type="password"
                    placeholder="Enter password"
                    name="password"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <button
                    
                    type="submit"
                    className="text-white bg-[#150F0A] px-8 py-2 text-lg"
                  >
                    Log In
                  </button>
                  {/* <p className="text-sm text-center">
                    Do not own an account?{" "}
                    <span className="text-sky-500">
                      <Link href="/signUp"> Create A Free Account </Link>
                    </span>
                    instead
                  </p> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}
