import AuthorAvatar from "@/app/components/AuthorAvatar";
import { Badge } from "@/components/ui/badge";
import {defaultBlogModel} from "@/app/model/BlogModel";

/**
 * Our PostOverlayCard is a reusable UI component used to display a post as a card format.
 *
 * @property featured image, category name, a heading, author image, author name, and publication date.
 *
 * @returns React component that can be easily integrated into any web application.
 */

const PostOverlayCard = () => {
  return (
    <div className="card relative font-work">
      {/* Card Image */}
      <figure>
        <img
          width="1216"
          height="450"
          alt={`banner_image`}
          src={defaultBlogModel.imageUrl}
          className="rounded-xl w-full h-[450px]"
        />
      </figure>
      <div className="card-body p-2 md:p-10 absolute bottom-0 w-full md:w-8/12 z-20 text-inherit">
        {/* <div className="w-fit px-2.5 py-1 text-xs md:text-sm rounded-md mb-4 font-medium text-slate-950 dark:text-white bg-slate-500">
          Technology
        </div> */}
        {
          defaultBlogModel.tags.map((tag, index) => (
            <Badge key={index} variant="secondary">{tag}</Badge>
          ))
        } 
        <h3>
          <a
            href="/"
            className="text-base-content font-semibold text-xl md:text-2xl lg:text-4xl leading-5 md:leading-10 hover:text-cyan-500 transition-all hover:duration-500"
          >
            {defaultBlogModel.title}
          </a>
        </h3>
        <div className="mt-3 md:mt-6 flex items-center gap-5 text-neutral-content">
          <div className=" flex items-center gap-3">
            {/* Added overflow-hidden */}
            <AuthorAvatar user={{ name: defaultBlogModel.authorName, picture: defaultBlogModel.authorAvatar }} />
            <h5>
              <a
                href="/author"
                className="text-xs md:text-base font-medium hover:text-primary transition hover:duration-300"
              >
                {defaultBlogModel.authorName}
              </a>
            </h5>
          </div>
          <p className=" text-xs md:text-base">{defaultBlogModel.createdAt}</p>
        </div>
      </div>

      {/*  overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
    </div>
  );
};

export default PostOverlayCard;
