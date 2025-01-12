import AuthorAvatar from '@/app/components/AuthorAvatar';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

/**
 * Our PostCard is a reusable UI component used to display a post as a card format.
 *
 * @property featured image, category name, a heading, author image, author name, and publication date.
 *
 * @returns React component that can be easily integrated into any web application.
 */

const PostCard = () => {
   return (
     <div className="card w-fit p-4 border border-base-content/10 rounded-xl font-work text-slate-950 dark:text-white">
       <figure>
         <img
           src="1674916984257.jpeg"
           alt="email"
           className={`rounded-xl w-full`}
           width={360}
           height={240}
         />
       </figure>
       <div className="card-body py-6 px-2">
         <Badge variant="secondary">Technology</Badge>
         <h3>
           <Link
             to="/single-post"
             className="text-base-content hover:text-cyan-500 transition-all duration-300 ease-in-out font-semibold text-lg md:text-xl lg:text-2xl mt-2"
           >
             The Impact of Technology on the Workplace: How Technology is
             Changing
           </Link>
         </h3>
         <div className="mt-5 flex items-center gap-5 text-base-content/60 ">
           <div className=" flex items-center gap-3">
             {/* <Avatar>
               <AvatarImage src="https://placehold.it/100x100" />
               <AvatarFallback>CN</AvatarFallback>
             </Avatar> */}
             {/* Added overflow-hidden */}
             <AuthorAvatar user={{ name: "John Doe", picture: "" }} />
             <h5>
               <Link
                 to="/author"
                 className="text-base font-medium text-slate-950 dark:text-white hover:text-primary transition hover:duration-300"
               >
                 Jason Francisco
               </Link>
             </h5>
           </div>
           <p className="text-base">August 20, 2022</p>
         </div>
       </div>
     </div>
   );
}

export default PostCard
