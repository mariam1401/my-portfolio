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

              <div className="flex justify-center gap-[80px] mt-[80px] max-w-[1140px] m-auto">
                  <div className="sticky top-[80px] self-start">
                      <ImageFrame />
                  </div>

                  <div className="flex flex-col gap-[120px] w-min">
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
