"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { Code, ImageIcon, LayoutDashboardIcon, MessageSquare, MusicIcon, Settings, VideoIcon } from "lucide-react";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    name: "Dashboard",
    icon: LayoutDashboardIcon,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    name: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    name: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-500",
  },
  {
    name: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-500",
  },
  {
    name: "Music Generation",
    icon: MusicIcon,
    href: "/music",
    color: "text-emerald-500",
  },
  {
    name: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-700",
  },
  {
    name: "Settings",
    icon: Settings,
    href: "/settings",
  },

];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            {/* <Image fill alt="Logo" src="/logo.svg" /> */}
            <h1 className={cn("text-2xl font-bold", montserrat.className)}>
              Genius
            </h1>
          </div>
        </Link>
        <div className="space-y-1">
            {routes.map((route) => (
                <Link key={route.name} href={route.href} className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition", pathname === route.href ? "text-white bg-white/10" : "text-zinc-400")}>
                    <div className="flex items-center flex-1">
                        <route.icon className={cn("w-5 h-5 mr-3", route.color)} />
                        <span className="text-sm">{route.name}</span>
                    </div>
                </Link>
                ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
