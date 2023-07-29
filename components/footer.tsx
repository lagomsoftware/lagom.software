import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-8 py-12 text-white">
      <div className="flex items-center justify-between mx-auto max-w-screen-md">
        <Link href="/" className="translate-y-1">
          <Image
            src="/wordmark-white.svg"
            alt="lagom wordmark"
            className="w-24"
            height={402}
            width={752}
          />
        </Link>

        <a
          href="https://github.com/lagomsoftware"
          className="rounded-full opacity-25 hover:opacity-100 transition focus-visible:opacity-100"
          target="_blank"
          title="GitHub"
        >
          <Image
            src="/github-mark-white.svg"
            alt="GitHub icon"
            className="w-8"
            width={200}
            height={200}
          />
        </a>
      </div>
    </footer>
  );
}
