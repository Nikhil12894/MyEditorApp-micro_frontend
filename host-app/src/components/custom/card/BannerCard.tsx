import AuthorAvatar from '@/app/components/AuthorAvatar';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

/**
 * Our BannerCard is a reusable UI component used to display a top section of our website
 *
 * @property featured image, a heading, author name and publication date.
 *
 * @returns React component that can be easily integrated into any web application.
 */

const BannerCard = () => {
   return (
     <div className="relative rounded-xl font-work mb-24">
       <img
         width="1216"
         height="600"
         alt={`banner_image`}
         src="1674916984257.jpeg"
         className="rounded-xl w-full h-[600px]"
       />
       <div className="absolute -bottom-16 left-4 md:left-14 rounded-xl p-4 md:p-10 bg-slate-400 text-slate-950 dark:bg-slate-900 dark:text-white w-10/12 md:w-7/12 lg:w-6/12 shadow-[0_12px_24px_-6px] shadow-base-content/20">
         <Badge variant="secondary">Technology</Badge>
         <h3>
           <Link
             to="/"
             className="text-base-content font-semibold text-xl md:text-2xl lg:text-4xl leading-5 md:leading-10 hover:text-cyan-500 transition-all hover:duration-500"
           >
             The Impact of Technology on the Workplace: How Technology is
             Changing
           </Link>
         </h3>
         <div className="mt-6 flex items-center gap-5">
           <div className=" flex items-center gap-3">
             {/* <Avatar>
               <AvatarImage src="https://placehold.it/100x100" />
               <AvatarFallback>CN</AvatarFallback>
             </Avatar> */}
             {/* Added overflow-hidden */}
             <AuthorAvatar user={{ name: "John Doe", picture: "" }} />
             <h6>
               <Link
                 to="/author"
                 className="text-base-content/60 text-xs md:text-base font-medium hover:text-primary transition hover:duration-300"
               >
                 Jason Francisco
               </Link>
             </h6>
           </div>
           <p className="text-base-content/60 text-xs md:text-base">
             August 20, 2022
           </p>
         </div>
       </div>
     </div>
   );
}

export default BannerCard
