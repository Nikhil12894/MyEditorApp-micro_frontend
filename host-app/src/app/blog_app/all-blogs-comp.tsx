/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from '@/components/ui/button'
import Advertisement from "@/components/custom/advertisement/Advertisement";
import PostCard from "@/components/custom/card/PostCard";
import PostOverlayCard from "@/components/custom/card/PostOverlayCard";

const BlogListing = () => {
   return (
     <main>
       <div className="container mx-auto">
         {/* Page title info */}
         {/* <section>
               <PageInfo />
            </section> */}

         {/* Banner */}
         <section className="my-12">
           <PostOverlayCard />
         </section>

         {/* All posts component */}
         <section className="my-20">
           <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
             {[1, 2, 3, 4, 5, 6].map((item: any) => (
               <PostCard key={item} />
             ))}
           </div>
           <div className="flex items-center justify-center w-full mt-8">
             <Button variant={'outline'} size={'lg'} className="bg-secondary font-work px-5 text-base font-medium text-slate-950 dark:text-white">
               Load More
             </Button>
           </div>
         </section>

         {/* Advertisement component */}
         <section className="mb-24">
           <Advertisement />
         </section>
       </div>
     </main>
   );
}

export default BlogListing
