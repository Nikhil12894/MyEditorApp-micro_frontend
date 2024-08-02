/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom"
import Advertisement from "@/components/custom/advertisement/Advertisement"
import BannerCard from "@/components/custom/card/BannerCard"
import PostCard from "@/components/custom/card/PostCard"

export default function HomeComp() {
   return (
     <div className="container mx-auto my-1">
       {/* Banner Component */}
       <section>
         <BannerCard />
       </section>

       {/* Advertisement Component */}
       <section className="pt-12">
         <Advertisement />
       </section>

       {/* Latest Post */}
       <section className="my-20">
         <h3 className="text-slate-950 dark:text-white font-bold text-2xl mb-8 font-work leading-8">
           Latest Post
         </h3>
         <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
           {[1, 2, 3].map((item: any) => (
             <PostCard key={item} />
           ))}
         </div>
         <div className="flex items-center justify-center w-full mt-8">
           <Link
             to={`/blog`}
             className=" text-slate-950 dark:text-white font-work font-medium text-base hover:bg-cyan-500 hover:text-white transition-all duration-300 ease-in-out rounded-full px-4 py-2 bg-slate-500"
           >
             View All Post
           </Link>
         </div>
       </section>

       {/* Advertisement Component */}
       <section className="mb-24">
         <Advertisement />
       </section>
     </div>
   );
}
