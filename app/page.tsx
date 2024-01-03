"use client";
import Image from "next/image";
import { data } from "@/helper/data";
import nitya_nanda from "@/public/assets/nitya-nanda.jpg";
import DOMPurify from "isomorphic-dompurify";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const service = data[0];
  const [active, setActive] = useState("1");

  function removeUnderscore(str: String) {
    return str.replace(/_/g, " ");
  }
  return (
    <main className="">
      <div className="relative">
        <div className="absolute left-[4rem] bottom-10 max-w-2xl mx-auto text-white">
          <h2 className="text-lg font-semibold text-white/70 pb-2">
            {service.instructor.name}
          </h2>
          <h1 className="text-3xl font-bold">{service.course.title}</h1>
        </div>
        <Image
          src={nitya_nanda}
          alt={service.course.title}
          objectFit="cover"
          className="h-[60vh] w-full object-cover"
        />
      </div>

      <div className="">
        <div className="max-w-full mx-auto w-11/12  grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="mt-12 col-span-1 md:col-span-2 pb-16">
            <div className="pb-5">
              <div className="">
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex gap-6" aria-label="Tabs">
                    <div
                      onClick={() => setActive("1")}
                      className={`shrink-0 border-b-2   px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 cursor-pointer ${
                        active === "1"
                          ? "border-b-2 border-gray-600"
                          : "border-transparent"
                      }`}
                    >
                      About
                    </div>

                    <div
                      onClick={() => setActive("2")}
                      className={`shrink-0 border-b-2   px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 cursor-pointer ${
                        active === "2"
                          ? "border-b-2 border-gray-600"
                          : "border-transparent"
                      }`}
                    >
                      Instructor
                    </div>

                    <div
                      onClick={() => setActive("3")}
                      className={`shrink-0 border-b-2   px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 cursor-pointer ${
                        active === "3"
                          ? "border-b-2 border-gray-600"
                          : "border-transparent"
                      }`}
                    >
                      Reviews
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            {/* about section */}
            {active === "1" && (
              <div className="space-y-5">
                <div>
                  <h2 className="pb-3 text-2xl font-bold">About the Course</h2>
                  <div
                    className="pb-3"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        service?.course?.about?.html_content
                      ),
                    }}
                  />
                </div>
                <div>
                  <h2 className="pb-3 text-2xl font-bold">
                    What to expect from the course
                  </h2>
                  <div
                    className=""
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        service.course.what_to_expect.html_content
                      ),
                    }}
                  />
                </div>
                <div>
                  <h2 className="pb-3 text-2xl font-bold">
                    Key topics covered
                  </h2>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        service.course.key_topics.html_content
                      ),
                    }}
                  />
                </div>
              </div>
            )}

            {/* instructor section */}
            {active === "2" && (
              <div className="pt-8">
                <h2 className="pb-3 text-2xl font-bold">
                  About the Instructor
                </h2>
                <div>
                  <div className="grid grid-cols-3">
                    <div className="col-span-1">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR0Cqtuf8vV9X3yBx3VLRydtvAWhJihR5x5CqEJxeocgztOMIMN8zC&usqp=CAE&s"
                        alt=""
                        className="h-20 w-20"
                      />
                    </div>
                    <div className="pb-3 col-span-2">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(
                            service?.about_instructor?.html_content
                          ),
                        }}
                      />
                      <div className="flex gap-4 justify-start pt-6 flex-wrap">
                        <div className="flex gap-2 justify-center items-center">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
                              width="16"
                              viewBox="0 0 512 512"
                              className="fill-blue-600"
                            >
                              <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                            </svg>
                          </span>
                          <span>Facebook</span>
                        </div>
                        <div className="flex gap-2 justify-center items-center">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
                              width="16"
                              viewBox="0 0 512 512"
                            >
                              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                            </svg>
                          </span>
                          <span>Twiter</span>
                        </div>
                        <div className="flex gap-2 justify-center items-center">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
                              width="18"
                              viewBox="0 0 576 512"
                              className="fill-red-600"
                            >
                              <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                            </svg>
                          </span>
                          <span>Youtube</span>
                        </div>
                        <div className="flex gap-2 justify-center items-center">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
                              width="14"
                              viewBox="0 0 448 512"
                            >
                              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                            </svg>
                          </span>
                          <span>Instagram</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* reviews */}
            {active === "3" && (
              <div className="">
                <h2 className="pb-3 text-2xl font-bold">Reviews</h2>
                <div className="py-8 bg-sky-100 ">
                  <p className="font-bold text-lg text-center max-w-2xl mx-auto w-11/12">
                    "{service.testimonial.text}"
                  </p>
                  <div className="mx-auto w-fit">
                    <p className="pt-4 font-bold">
                      {service.testimonial.reviewer_name}
                    </p>
                    <p className="t">
                      {service.testimonial.reviewer_designation}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="bg-secondary p-4 h-fit md:!sticky md:top-14 col-span-1 bg-sky-100 -mt-8">
            <div className="p-4">
              <h2 className="font-bold text-lg pb-1">Course fees</h2>
              <div className="flex gap-1 text-3xl pb-3">
                <span>₹</span>
                <p className="font-bold">{service.course.fee.amount}</p>
              </div>
              <div>
                <h2 className="font-bold">Whts's Included:</h2>
                <div>
                  <ul className="list-inside list-disc">
                    <li>
                      {service.course.inclusions.on_demand_videos}
                      <span className="px-2">
                        {removeUnderscore(
                          Object.keys(service.course.inclusions)[0]
                        )}
                      </span>
                    </li>
                    <li>
                      {service.course.inclusions.live_qa_sessions}{" "}
                      <span className="">
                        {removeUnderscore(
                          Object.keys(service.course.inclusions)[1]
                        )}
                      </span>
                    </li>
                    <li>
                      {service.course.inclusions.whatsapp_community}{" "}
                      <span className="">
                        {removeUnderscore(
                          Object.keys(service.course.inclusions)[2]
                        )}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-5">
                <button className="bg-blue-700 text-white px-6 py-2 inline-block w-full rounded-full">
                  Register Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
