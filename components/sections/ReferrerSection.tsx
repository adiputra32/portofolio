"use client";

import { Dictionary } from "@/lib/get-dictionary";
import { motion } from "framer-motion";
import Image from "next/image";

interface ReferrerSectionProps {
  dict: Dictionary;
}

const ReferrerSection = ({ dict }: ReferrerSectionProps) => {
  return (
    <section id="referrer" className="min-h-screen pt-[15vh]">
      <h1 className="text-2xl text-center font-press-start font-normal tracking-wide mb-12">
        {dict.referrer.title}
      </h1>

      <div className="flex flex-col items-center gap-8">
        <motion.div className="w-4xl mr-12">
          <Image
            src="/hero2.png"
            alt="hero"
            width={150}
            height={150}
            priority={true}
            className="mr-auto ml-12"
          />
          <div className="border-6 border-foreground dark:border-foreground p-4">
            <p className="font-press-start text-xs font-semibold uppercase leading-loose">
              Hafizhatul Kiromi MZ
            </p>
            <p className="font-press-start text-xs font-semibold uppercase leading-loose mb-4">
              Jobseeker Company Ex-Staff
            </p>
            <p className="font-press-start text-xs leading-loose uppercase">
              Adi is an exceptional Front End developer who consistently
              demonstrated deep insight and expertise in his field. He has a
              remarkable ability to articulate the needs and best practices from
              a frontend perspective, ensuring that request and response
              requirements are clearly communicated and effectively implemented.
            </p>
          </div>
        </motion.div>

        <motion.div className="w-4xl ml-12">
          <Image
            src="/hero2.png"
            alt="hero"
            width={150}
            height={150}
            priority={true}
            className="mr-auto ml-12"
          />
          <div className="border-6 border-foreground dark:border-foreground p-4">
            <p className="font-press-start text-xs font-semibold uppercase leading-loose">
              Veggy Priyangka
            </p>
            <p className="font-press-start text-xs font-semibold uppercase leading-loose mb-4">
              Jobseeker Company Ex-Staff
            </p>
            <p className="font-press-start text-xs leading-loose uppercase">
              Adi is an exceptionally talented Fullstack Engineer who
              consistently impressed the entire group with his technical
              expertise and problem-solving skills. He played a key role in HRIS
              Project where his innovative solutions greatly contributed to the
              success of the project.
            </p>
          </div>
        </motion.div>

        <motion.div className="w-4xl mr-12">
          <Image
            src="/hero2.png"
            alt="hero"
            width={150}
            height={150}
            priority={true}
            className="mr-auto ml-12"
          />
          <div className="border-6 border-foreground dark:border-foreground p-4">
            <p className="font-press-start text-xs font-semibold uppercase leading-loose">
              Yuke Dhelilah
            </p>
            <p className="font-press-start text-xs font-semibold uppercase leading-loose mb-4">
              Jobseeker Company Ex-Staff
            </p>
            <p className="font-press-start text-xs leading-loose uppercase">
              Mas Adi is one of the best teammates I have ever worked with. He
              is able to quickly understand complex business requirements and
              translate them into effective solutions. His attention to detail
              and ability to deliver quality code on time is second to none.
            </p>
          </div>
        </motion.div>

        <motion.div className="w-4xl ml-12">
          <Image
            src="/hero2.png"
            alt="hero"
            width={150}
            height={150}
            priority={true}
            className="mr-auto ml-12"
          />
          <div className="border-6 border-foreground dark:border-foreground p-4">
            <p className="font-press-start text-xs font-semibold uppercase leading-loose">
              Agia Tyas
            </p>
            <p className="font-press-start text-xs font-semibold uppercase leading-loose mb-4">
              Jobseeker Company Ex-Staff
            </p>
            <p className="font-press-start text-xs leading-loose uppercase">
              Mas adi is a well dedicated developer, he is very enthusiast in
              doing his job. His ability to seamlessly integrate front-end and
              back-end development is impressive.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReferrerSection;
