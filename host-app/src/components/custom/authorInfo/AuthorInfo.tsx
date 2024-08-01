import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Our AuthorInfo is a reusable UI component that can be used to represent user details information.
 *
 * @property author image, author name and position, author's short information and authors's social identity.
 *
 * @returns React component that can be easily integrated into any web application.
 */

const AuthorInfo = () => {
   return (
     <div className="container mx-auto py-12 sm:mt-8 bg-slate-200/30 dark:bg-slate-800/30 px-5 sm:px-0 rounded-xl font-work">
       <div className="flex items-center justify-center gap-4">
         {/* <div className="avatar">
           <div className="w-16 rounded-full">
             <img
               src="https://placehold.it/100x100"
               width={64}
               height={64}
               alt="avatar_image"
             />
           </div>
         </div> */}
         <Avatar>
           <AvatarImage src="https://placehold.it/100x100" />
           <AvatarFallback>CN</AvatarFallback>
         </Avatar>
         <div>
           <h5 className="text-base-content text-base sm:text-xl font-medium">
             Jonathan Doe
           </h5>
           <span className="text-base-content/60 text-xs sm:text-sm">
             Collaborator & Editor
           </span>
         </div>
       </div>
       <p className="text-sm sm:text-lg text-base-content/70 text-center py-6 max-w-2xl w-full mx-auto">
         Meet Jonathan Doe, a passionate writer and blogger with a love for
         technology and travel. Jonathan holds a degree in Computer Science and
         has spent years working in the tech industry, gaining a deep
         understanding of the impact technology has on our lives.
       </p>
       <div className="flex items-center justify-center gap-2">
         {socialShare?.map((item, index) => (
           <Link
             to={item?.link}
             target="_blank"
             key={index}
             className="bg-secondary text-secondary-content hover:text-primary-content w-8 h-8 flex justify-center items-center rounded-md dark:hover:bg-slate-700 hover:bg-slate-300 transition duration-300 ease-in-out"
           >
             {item?.icon()}
           </Link>
         ))}
       </div>
     </div>
   );
}

export default AuthorInfo

// social share icons
const socialShare = [
   {
      id: 1,
      icon: () => (
         <Facebook className="w-4 h-4" />
      ),
      alt: 'facebook_icon',
      link: '/',
   },
   {
      id: 2,
      icon: () => (
         <Twitter className="w-4 h-4" />
      ),
      alt: 'twitter_icon',
      link: '/',
   },
   {
      id: 3,
      icon: () => (
         <Instagram className="w-4 h-4" />
      ),
      alt: 'instagram_icon',
      link: '/',
   },
   {
      id: 4,
      icon: () => (
         <Linkedin className="w-4 h-4" />
      ),
      alt: 'linkedin_icon',
      link: '/',
   },
]
