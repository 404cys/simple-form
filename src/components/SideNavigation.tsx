"use client";
import React from "react";
import { FileText , User , FileQuestion , Send ,StepBackIcon} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const SideItems = [
    { name: "About You", path: "/About-u", icon: <User size={20} /> },
    { name: "Problem?", path: "/Problem", icon: <FileQuestion size={20} /> },
    { name: "Reports", path: "/Reports", icon: <FileText size={20} /> },
    { name: "Conferm", path: "/Send", icon: <Send size={20} /> },
];

export default function SideNavigation() {
    const pathName = usePathname();  
    return (
      <>
  <aside className="hidden container md:block sm:block lg:p-4">
            <h1 className="text-xl mb-6">Welcome!</h1>
            <Link href="/">
            <div>
            
            </div>
            </Link>
            <nav className=" ">
                {SideItems.map((e) => (
                    <Link
                        key={e.path}
                        href={e.path}
                        className={clsx(
                            "flex gap-4 p-3 items-center rounded-md transition-all duration-75 hover:translate-x-1 "
                        )}
                    >
                         <div className={clsx(
                            "p-2 rounded-full transition-all duration-200",
                            pathName === e.path
                                ? "p-3 bg-blue-300"  
                                : "hover:bg-blue-200"  
                        )}>
                          {React.cloneElement(e.icon , {size: pathName === e.path ? 22: 20})}
                        </div>

                         <span className="text-white">{e.name}</span>
                    </Link>
                ))}
            </nav>
           
            </aside>
      </>
            
    );
}
