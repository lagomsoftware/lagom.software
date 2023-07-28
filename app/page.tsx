"use client";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", duration: 1.5, delay: 0.2 }}
      className="px-8"
    >
      <div className="flex items-center justify-center min-h-screen mx-auto max-w-screen-md gap-10">
        <div className="grid md:grid-cols-2 gap-y-10 md:gap-x-14 md:gap-y-9">
          <Image
            src="/wordmark-black.svg"
            alt="lagom wordmark"
            className="w-36 md:w-48 md:place-self-end dark:hidden"
            height={201}
            width={376}
          />

          <Image
            src="/wordmark-white.svg"
            alt="lagom wordmark"
            className="hidden w-36 md:w-48 md:place-self-end dark:block"
            height={201}
            width={376}
          />

          <p className="text-lg leading-relaxed md:translate-y-[19px]">
            We&apos;re two guys who love crafting
            <br />
            high-quality software for the web.
          </p>

          <a
            href="mailto:hello@lagom.software"
            className="flex items-center justify-center w-full p-4 font-medium text-center bg-white rounded shadow dark:shadow-none dark:bg-black link-button gap-1 ring-1 ring-gray-900/10 dark:ring-gray-100/30 hover:bg-gray-100 dark:hover:bg-gray-800 transition hover:ring-gray-900/20 dark:hover:ring-gray-300/40"
          >
            <span>Wanna chat? Let&apos;s do it</span>{" "}
            <ArrowRightIcon className="w-4" />
          </a>

          <div className="flex gap-4">
            <div className="w-[3px] h-full bg-gray-900/20 dark:bg-gray-100/30"></div>

            <i className="block -my-px leading-relaxed text-gray-500">
              Lagom (pronounced [ˈlɑ̂ːɡɔm], LAW-gom) is a Swedish word meaning
              &ldquo;just the right amount&rdquo; or &ldquo;not too much, not
              too little&rdquo;.
            </i>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
