import React from "react";
import Layout from "../components/layout/Layout";
import Slider2 from "../components/slider/Slider2";
import TextEffect from "../components/elements/TextEffect";
import Link from "next/link";
import { Subscribe, SignIn, ContactForm } from "../components";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>
            Software Web/Mobile Development - Consulting - FelpAPP -
            Online Courses - Mentorship
          </title>
          <meta
            name="Learning and Building Web and Mobile Application"
            content="Become Software Developer / Conusling for Business and Startups"
          />
        </Head>
        <section className="relative -mt-24 pt-24">
          <div
            className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-blueGray-100 z-0"
            style={{ "z-index": "-1" }}
          ></div>
          <div className="container">
            <div className="flex flex-wrap items-center -mx-3">
              <div className="w-full lg:w-1/2 px-3">
                <div className="py-12">
                  <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                    <h2 className="text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn">
                      Committed to{" "}
                      <span className="text-blue-500">People</span>{" "}
                      and the future
                    </h2>
                    <p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn">
                      We are{" "}
                      <strong className="text-blue-500">
                        felpApp
                      </strong>
                      , a Creative{" "}
                      <span className="typewrite d-inline text-brand">
                        <TextEffect
                          text1="Mentorship Program"
                          text2="Career Consulting"
                          text3="Consulting Agency"
                        />
                      </span>
                    </p>
                    <p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn mt-3 text-sm">
                      We are helping You to make a career change and
                      achieve personal & business growth.
                    </p>
                  </div>
                  <div className="text-center lg:text-left">
                    <a
                      className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded wow animate__animated animate__fadeIn"
                      href="#key-features"
                    >
                      Key Features
                    </a>
                    <a
                      className="block hover-up-2 sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded wow animate__animated animate__fadeIn"
                      data-wow-delay=".3s"
                      href="#how-we-work"
                    >
                      How We Work?
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-3 lg:bg-blueGray-10 mb-12 lg:mb-0 pb-10">
                <div className="flex items-center justify-center">
                  <img
                    className="lg:max-w-lg"
                    src="/assets/imgs/illustrations/eating.svg"
                    alt="felpApp - Consulting "
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Subscribe bgColor={"bg-blueGray-100"} />
        <section className="pt-16 pb-20" id="key-features">
          <div className="container">
            <div className="flex flex-wrap items-center mb-12">
              <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                <h2
                  className="text-4xl font-bold font-heading wow animate__animated animate__fadeIn"
                  data-wow-delay=".1s"
                >
                  <span>Solutions for </span>
                  <br />
                  <span className="text-blue-600">
                    your Personal{" "}
                  </span>
                  <span>
                    Grow <br />
                    on time
                  </span>
                </h2>
              </div>
              <div className="w-full lg:w-1/2">
                <p
                  className="lg:pl-16 text-blueGray-400 leading-loose wow animate__animated animate__fadeIn"
                  data-wow-delay=".4s"
                >
                  Skill development and training helps instill
                  emotional maturity in pupils. Learning new skills
                  requires students to be willing to experiment. While
                  doing so, they might face failures and
                  disappointments but that will eventually prepare
                  them to accept failures gracefully and develop a
                  NEVER GIVE UP attitude
                  <br />
                  There are ways you can position yourself for a
                  career change without having to go back to school.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 -mb-6">
              <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <div className="text-blue-500 mx-auto mb-4">
                    <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 font-bold font-heading">
                    Microlearning
                  </h3>
                  <p className="text-sm text-blueGray-400">
                    Microlearning deals with relatively small learning
                    units and short-term learning activities.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".5s"
                >
                  <div className="text-blue-500 mx-auto mb-4">
                    <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 font-bold font-heading">
                    Deliberate practice
                  </h3>
                  <p className="text-sm text-blueGray-400">
                    Deliberate practice is defined as being effortful
                    in nature, with the main goal of personal
                    improvement of performance!
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".7s"
                >
                  <div className="text-blue-500 mx-auto mb-4">
                    <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 font-bold font-heading">
                    Spaced repetition
                  </h3>
                  <p className="text-sm text-blueGray-400">
                    Spaced repetition is an evidence-based learning
                    technique that is usually performed with
                    flashcards.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".9s"
                >
                  <div className="text-blue-500 mx-auto mb-4">
                    <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 font-bold font-heading">
                    Mentorship
                  </h3>
                  <p className="text-sm text-blueGray-400">
                    A good mentor helps a mentee to make decisions
                    that help them reach their goals. Mentor builds a
                    mentees confidence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20" id="how-we-work">
          <div className="container">
            <div className="flex flex-wrap -mx-8">
              <div className="w-full lg:w-1/2 px-8">
                <div className="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
                  <h2
                    className="mb-4 text-3xl lg:text-4xl font-bold font-heading max-w-md wow animate__animated animate__fadeIn"
                    data-wow-delay=".1s"
                  >
                    Commit<span className="text-blue-600"> to</span>{" "}
                    Your Personal Growth.
                  </h2>
                  <p
                    className="mb-8 leading-loose text-blueGray-400 wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    Working with a team means there will be varying
                    opinions and ideas. Even if you think your idea is
                    best, you should listen to all ideas before
                    pushing yours. Search for compromises, and remain
                    respectful if your work is criticized.
                  </p>
                  <Link href="/services">
                    <a
                      className="inline-block text-xs py-4 px-8 text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded hover-up-2 wow animate__animated animate__fadeIn"
                      data-wow-delay=".5s"
                    >
                      Learn More
                    </a>
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-8">
                <ul className="space-y-12">
                  <li
                    className="flex -mx-4 wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <div className="px-4">
                      <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                        1
                      </span>
                    </div>
                    <div className="px-4">
                      <h3 className="my-4 text-xl font-semibold">
                        Project Initialization
                      </h3>
                      <p className="text-blueGray-400 leading-loose">
                        Project initiation is the first step in
                        starting a new project. During the project
                        initiation phase, you establish why you are
                        doing the project and what business value it
                        will deliver.
                      </p>
                    </div>
                  </li>
                  <li
                    className="flex -mx-4 wow animate__animated animate__fadeIn"
                    data-wow-delay=".5s"
                  >
                    <div className="px-4">
                      <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                        2
                      </span>
                    </div>
                    <div className="px-4">
                      <h3 className="my-4 text-xl font-semibold">
                        Looking for Creative
                      </h3>
                      <p className="text-blueGray-400 leading-loose">
                        Being creative means taking risks and ignoring
                        doubt and facing fears. It means breaking with
                        routine and doing something different for the
                        sake of doing something different.
                      </p>
                    </div>
                  </li>
                  <li
                    className="flex -mx-4 wow animate__animated animate__fadeIn"
                    data-wow-delay=".7s"
                  >
                    <div className="px-4">
                      <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                        3
                      </span>
                    </div>
                    <div className="px-4">
                      <h3 className="my-4 text-xl font-semibold">
                        Market Development
                      </h3>
                      <p className="text-blueGray-400 leading-loose">
                        Market development is a strategic step taken
                        by a company to develop the existing market
                        rather than looking for a new market.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container">
            <div className="flex flex-wrap -mx-3">
              <div className="relative w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
                <div className="max-w-md lg:max-w-xs mx-auto lg:ml-0 mb-6 lg:mb-0">
                  <h2
                    className="text-3xl md:text-4xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn animated"
                    data-wow-delay=".3s"
                  >
                    Simple Solution for{" "}
                    <span className="text-blue-500">Complex</span>{" "}
                    Connections
                  </h2>
                  <p
                    className="text-xs md:text-base text-blueGray-400 leading-loose wow animate__animated animate__fadeIn"
                    data-wow-delay=".9s"
                  >
                    A software solution is typically custom-built or
                    configured to solve a specific customer problem.
                  </p>
                </div>
                <div
                  className="lg:absolute lg:bottom-0 lg:left-0 flex justify-center wow animate__animated animate__fadeIn"
                  data-wow-delay=".5s"
                >
                  <div
                    id="carausel-fade-1-arrows"
                    className="flex"
                  ></div>
                </div>
              </div>
              <div
                className="w-full lg:w-2/3 flex flex-wrap px-3 wow animate__animated animate__fadeIn"
                data-wow-delay=".5s"
              >
                <div className="relative w-full rounded">
                  <div
                    className="carausel-fade slick-carausel rounded"
                    id="carausel-fade-1"
                  >
                    <Slider2 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="py-20 xl:bg-contain bg-top bg-no-repeat"
          style={{
            backgroundImage:
              "url('assets/imgs/backgrounds/intersect.svg')",
          }}
        >
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn animated">
                <span>Choose Your</span>
                <br />
                <span className="text-blue-600">Best </span>
                <span>Pricing Plan</span>
              </h2>
              <p
                className="max-w-sm mx-auto text-lg text-blueGray-400 wow animate__animated animate__fadeIn animated"
                data-wow-delay=".3s"
              >
                Great Things In Business Are Never Done By One Person
              </p>
              <br />
              <p
                className="max-w-sm mx-auto text-lg text-blueGray-400 wow animate__animated animate__fadeIn animated"
                data-wow-delay=".3s"
              >
                !!! ALL PLANS ARE FREE - TILL WE ARE IN BETA MODE !!!
              </p>
            </div>
            <div className="flex flex-wrap sm:justify-center mb-10">
              <label
                className="flex items-center mr-8 mb-2 wow animate__animated animate__fadeIn animated"
                data-wow-delay=".3s"
              >
                <input type="radio" name="billing" value="1" />
                <span className="mx-2 font-semibold">
                  Monthly Billing
                </span>
                <span className="inline-flex items-center justify-center w-12 h-10 bg-blue-500 text-white font-semibold rounded">
                  $59
                </span>
              </label>
              <label
                className="flex items-center mb-2 wow animate__animated animate__fadeIn animated"
                data-wow-delay=".5s"
              >
                <input type="radio" name="billing" value="2" />
                <span className="mx-2 font-semibold">
                  Annual Billing
                </span>
                <span className="inline-flex items-center justify-center w-12 h-10 bg-blue-500 text-white font-semibold rounded">
                  $99
                </span>
              </label>
            </div>
            <SignIn />
          </div>
        </section>
        <section className="py-20">
          <div className="container">
            <div className="max-w-2xl lg:max-w-3xl mx-auto">
              <div className="mb-12 text-center">
                <h2
                  className="text-4xl font-bold font-heading wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".1s"
                >
                  Get in touch!
                </h2>
                <p
                  className="text-blueGray-400 wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".5s"
                >
                  We will be glad to hear from you
                </p>
              </div>
              <div className="flex flex-wrap -mx-3 text-center">
                <div
                  className="w-1/2 lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".1s"
                >
                  <svg
                    className="mb-6 h-8 w-8 mx-auto text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <div className="leading-relaxed">
                    <span className="text-sm text-blueGray-400">
                      Phone
                    </span>
                    <p>
                      <a href="tel:786-702-4261">+ 1 786-702-2331</a>
                    </p>
                    <p>
                      <a href="tel:305-560-0950">+ 1 305-560-0950</a>
                    </p>
                  </div>
                </div>
                <div
                  className="w-1/2 lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".3s"
                >
                  <svg
                    className="mb-6 h-8 w-8 mx-auto text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <div className="leading-relaxed">
                    <span className="text-sm text-blueGray-400">
                      E-mail
                    </span>
                    <p>team@felpapp.com</p>
                  </div>
                </div>
                <div
                  className="w-full lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".5s"
                >
                  <svg
                    className="mb-6 h-8 w-8 mx-auto text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <div className="leading-relaxed">
                    <span className="text-sm text-blueGray-400">
                      Address
                    </span>
                    <p>151 SE 1st Street</p>
                    <p>Miami(FL), 33131</p>
                  </div>
                </div>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
