import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

interface BlogButtonProps {
  title: string;
  description: string;
  href: string;
}

function BlogButton({ title, description, href }: BlogButtonProps) {
  return (
    <Link href={href} className="">
      <div className="flex flex-col space-y-2 justify-start items-start group text-primary">
        <CardTitle className="group-hover:underline underline-offset-4">
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </div>
    </Link>
  );
}
export default BlogButton;
