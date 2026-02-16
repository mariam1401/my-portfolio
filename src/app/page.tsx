import {Header} from "@/components/Header";
import {ImageFrame} from "@/components/ImageFrame";
import {Introduction} from "@/components/Introduction";
import {RecentProjects} from "@/components/RecentProjects";
import {Experience} from "@/components/Experience";
import {Skills} from "@/components/Skiils";

export default function Home() {
  return (
      <div className="relative min-h-screen">
          <div className="relative z-10">
              <Header />

              <div className="flex  flex-col justify-center gap-[80px] mt-[80px] max-w-[810px]  m-auto lg:flex-row lg:max-w-[1140px]">
                  <div className=" relative top-[40px]  w-full self-start lg:sticky lg:top-[80px]  lg:m-0">
                      <ImageFrame />
                  </div>

                  <div className="flex flex-col gap-[120px] mt-10 w-full lg:w-min lg:mt-0">
                      <Introduction />
                      <RecentProjects />
                      <Experience />
                      <Skills />
                  </div>
              </div>
          </div>
      </div>
  );
}
