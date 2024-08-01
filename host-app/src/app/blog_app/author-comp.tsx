/* eslint-disable @typescript-eslint/no-explicit-any */
import AuthorInfo from '@/components/custom/authorInfo/AuthorInfo'
import PostCard from '@/components/custom/card/PostCard'


const Author = () => {
   return (
      <main>
         {/* Author info */}
         <section>
            <AuthorInfo />
         </section>

         {/* Latest Post */}
         <section>
            <div className="container mx-auto mt-12 mb-24 px-5 sm:px-0">
               <h3 className="text-base-content font-bold text-2xl mb-8">
                  Latest Post
               </h3>
               <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {[1, 2, 3, 4, 5, 6].map(
                     (item: any, index: number) => (
                        <div key={index}>
                           <PostCard />
                        </div>
                     )
                  )}
               </div>
            </div>
         </section>
      </main>
   )
}

export default Author
