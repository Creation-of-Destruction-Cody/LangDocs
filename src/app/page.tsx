import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { Button } from "@/components/ui/button";
import GridPattern from "@/components/ui/grid-pattern";
import IconCloud from "@/components/ui/icon-cloud";
import { cn } from "@/lib/utils";
import { slugs } from "@/utils/slugItem";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="container justify-center mx-auto items-center border-l border-dotted border-r border-[#121212]/15 dark:border-white/15">
        <div className="border-l border-dotted border-r border-[#121212]/15 dark:border-white/15">
          <section className="relative min-h-[640px] flex justify-center  text-center items-center flex-col gap-6 p-6">
            <GridPattern width={50} height={50} x={25} y={-1} className={cn("[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] ",)} />
            <GridPattern width={50} height={50} x={-25} y={-25} className={cn("[mask-image:linear-gradient(to_top_right,white,transparent,transparent)] ",)} />

            <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2 gap-12">
              <div className="flex flex-col gap-6 md:order-2 lg:px-8 pt-6">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col sm:flex-row gap-3 w-fit mx-auto">
                    <AnimatedGradientText>
                      🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                      <span className={cn( `inline animate-gradient bg-gradient-to-r dark:from-[#121212] dark:via-zinc-100 dark:to-zinc-300 bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,)}> 
                        New Version 1.0.0
                      </span>
                    </AnimatedGradientText>
                    <AnimatedGradientText>
                      👨🏻‍💻 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                      <span className={cn( `inline animate-gradient bg-gradient-to-r dark:from-[#121212] dark:via-zinc-100 dark:to-zinc-300 bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,)}> 
                        Users: 0
                      </span>
                    </AnimatedGradientText>
                  </div>
                  <h1 className="text-transparent sm:p-2 bg-clip-text inline-block bg-gradient-to-b from-[#121212] to-[#555] dark:from-zinc-100 dark:to-[#b3b2b2] text-6xl xl:text-7xl tracking-tighter font-bold ">LangDocs Language Docs</h1>
                </div>
                <p className="max-w-3xl flex text-[15px] text-pretty leading-relaxed text-sm lg:text-lg text-[#505050] dark:text-[#b3b2b2]">
                  Stay ahead with up-to-date, multilingual resources, offering comprehensive documentation, tutorials, and examples across various programming languages. Whether you&apos;re a beginner or experienced developer
                </p>
                <div className="flex flex-col w-full sm:flex-row gap-3 items-center">
                  <Button className="rounded-md w-full text-base font-medium px-3 py-2 h-11" asChild>
                    <Link href={"/soon..."}>
                      Get Started
                    </Link>
                  </Button>
                  <Button variant={"outline"} className="rounded-md w-full text-base font-medium px-3 py-2 h-11" asChild>
                    <Link href={"/soon..."}>
                      Join to Document Hub
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative flex md:order-1 max-w-lg items-center justify-center mx-auto overflow-hidden">
                <IconCloud iconSlugs={slugs} />
              </div>
            </div>
          </section>
          <section className="relative flex justify-center text-center items-center flex-col gap-6 p-6">
              <div className="flex flex-col sm:flex-row items-center gap-1">
                <h2 className="text-transparent pb-1 pr-2 bg-clip-text inline-block bg-gradient-to-b from-[#121212] to-[#555] dark:from-zinc-100 dark:to-[#b3b2b2] text-3xl tracking-tighter font-bold">Whats in LangDocs?</h2>
                <p className="max-w-3xl flex text-[15px] text-pretty leading-relaxed text-sm lg:text-lg text-[#505050] dark:text-[#b3b2b2]">Everything you need to build your first pages</p>
              </div>

          </section>
        </div>
      </main>
    </>
  );
}
