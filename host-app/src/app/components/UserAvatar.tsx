import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "../context/AuthContext";
import { CircleUser } from "lucide-react";

function UserAvatar() {
  const { user } = useAuth();
  const comp = user?.picture ? (
    <Avatar>
      <AvatarImage src={user.picture} />
      <AvatarFallback>
        {user.name.split(" ")[0].charAt(0).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  ) : (
    <CircleUser className="h-5 w-5" />
  );

  return comp;
}

export default UserAvatar;
