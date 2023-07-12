import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "../ui/avatar";
import { UserAvatar } from "../avatar/user-avatar";

interface LinkCardProps {
  title: string;
  description?: string;
  href: string;
  imageUrl?: string;
  imageName?: string;
}

function LinkCard({
  title,
  description,
  href,
  imageUrl,
  imageName,
}: LinkCardProps) {
  return (
    <Link href={href || "#"}>
      <Card>
        <CardContent className="p-6 flex space-x-2 justify-between items-center">
          <div className="flex space-x-4">
            {imageName && <UserAvatar imageUrl={imageUrl} name={imageName} />}
            <div>
              <CardTitle>{title}</CardTitle>
              {description && <CardDescription>{description}</CardDescription>}
            </div>
          </div>
          <div>
            <Icons.arrowUpRight />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default LinkCard;
