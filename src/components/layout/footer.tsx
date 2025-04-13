import { MapPin, Mails } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <>
      <Separator className="bg-slate-200 h-[2px]" />
      <footer className="bg-[#E8A647] text-white">
        <div className="relative px-4 sm:px-6 md:px-16 py-8">
          {/* Content */}
          <div className="text-center text-sm md:text-base">
            <img
              src="/images/logonbg.webp"
              alt="Logo"
              width={160}
              height={160}
              className="mx-auto mb-4"
            />
            <p>© 2024-2025 Galveston Specialty Pharmacy. All Rights Reserved</p>
          </div>

          {/* Instagram Icon - Positioned absolutely in bottom-right */}
          <div className="absolute bottom-6 right-6 text-sm">
            <Link href="/privacy">
              {/* <i
                aria-hidden
                className="fa fa-info text-white w-4 h-4 text-xl hover:text-rose-600 transition-all duration-300"
              ></i> */}
              <span className="sr-only">Privacy & Policy</span>
              Privacy & Policy
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
