import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AuthorAvatarProps {
  user: {
    name: string;
    picture: string;
  };
}

function AuthorAvatar({ user }: Readonly<AuthorAvatarProps>) {
  const names = user.name.trim().split(/\s+/); // Split by any whitespace
  let initials = "";

  if (names.length === 1) {
    initials = names[0].charAt(0).toUpperCase();
    if (names[0].length > 1) {
      initials += names[0].charAt(1).toUpperCase();
    }
  } else if (names.length >= 2) {
    initials =
      names[0].charAt(0).toUpperCase() +
      names[names.length - 1].charAt(0).toUpperCase();
  }
  const comp = (
    <Avatar>
      <AvatarImage src={user.picture} />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );

  return comp;
}

export default AuthorAvatar;
