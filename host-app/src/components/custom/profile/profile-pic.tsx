import { fileToBase64 } from "@/lib/fileUtil";
import React, { useState } from "react";
interface ProfilePicProps {
  isEditable?: boolean;
}
const ProfilePic = (props: ProfilePicProps) => {
  const [profilePic, setProfilePic] = useState<string>();
  const loadFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log("Selected file:", file);
      const src = await fileToBase64(file);
      setProfilePic(src);
    }
  };
  return (
    <section className="w-20 h-20 flex sm:w-32 sm:h-32 md:w-64 md:h-64">
      <div className="mx-auto w-20 text-center sm:w-32  md:w-64 ">
        <div className="relative w-20 sm:w-32  md:w-64">
          {profilePic ? (
            <img
              className="w-20 h-20 rounded-full absolute sm:w-32 sm:h-32 md:w-64 md:h-64"
              src={profilePic}
              alt=""
            />
          ) : (
            <div className="w-20 h-20 rounded-full flex justify-center items-center text-2xl sm:text-4xl md:text-8xl font-bold bg-slate-50 dark:bg-slate-900 text-neutral-content sm:w-32 sm:h-32 md:w-64 md:h-64 absolute">
              NK
            </div>
          )}
          {props.isEditable && <div className="w-20 h-20 group hover:bg-slate-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500 sm:w-32 sm:h-32 md:w-64 md:h-64">
            <img
              className="hidden group-hover:block w-6 sm:w-8 md:w-12"
              src="https://www.svgrepo.com/show/33565/upload.svg"
              alt=""
            />
            <input
              type="file"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => loadFile(e)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer
      "
            />
          </div>}
        </div>
      </div>
    </section>
  );
};

export default ProfilePic;
