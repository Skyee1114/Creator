// "use client"
//
// import * as React from "react"
// import Link from "next/link"
// import Image from "next/image";
//
// import { cn } from "@/lib/utils"
// import {
//     NavigationMenu,
//     NavigationMenuContent,
//     NavigationMenuItem,
//     NavigationMenuLink,
//     NavigationMenuList,
//     NavigationMenuTrigger,
//     navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu"
//
// const components: { title: string; href: string; description: string }[] = [
//     {
//         title: "Alert Dialog",
//         href: "/saas/help-centre",
//         description:
//             "A modal dialog that interrupts the user with important content and expects a response.",
//     },
//     {
//         title: "Hover Card",
//         href: "/saas/help-centre",
//         description:
//             "For sighted users to preview content available behind a link.",
//     },
//     {
//         title: "Progress",
//         href: "/saas/help-centre",
//         description:
//             "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//     },
//     {
//         title: "Scroll-area",
//         href: "/saas/help-centre",
//         description: "Visually or semantically separates content.",
//     },
//     {
//         title: "Tabs",
//         href: "/saas/help-centre",
//         description:
//             "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//     },
//     {
//         title: "Tooltip",
//         href: "/saas/help-centre",
//         description:
//             "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//     },
// ]
//
// export  function NavBarSaaSDropdownMenus() {
//     return (
//         <NavigationMenu>
//             <NavigationMenuList>
//                 <NavigationMenuItem>
//                     <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
//                     <NavigationMenuContent>
//                         <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//                             <li className="row-span-3">
//                                 <NavigationMenuLink asChild>
//                                     <Link
//                                         className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
//                                         href= "/saas/getting-started"
//                                     >
//                                         <Image className="h-32 w-auto"
//                                                width={32}
//                                                height={32}
//                                                src="/images/creator-logo-bug.svg"
//                                                alt="Creator | SaaS" />
//                                         <div className="mb-2 mt-4 text-2xl font-medium text-center">
//                                             creat&apos;or
//                                         </div>
//                                         <p className="text-sm leading-tight text-muted-foreground text-center">
//                                             Crowdfunding on the Blockchain
//                                         </p>
//                                     </Link>
//                                 </NavigationMenuLink>
//                             </li>
//                             <ListItem href= "/saas/getting-started" title="Introduction">
//                                 Re-usable components built using Radix UI and Tailwind CSS.
//                             </ListItem>
//                             <ListItem href= "/saas/getting-started" title="Installation">
//                                 How to install dependencies and structure your app.
//                             </ListItem>
//                             <ListItem href= "/saas/getting-started" title="Typography">
//                                 Styles for headings, paragraphs, lists...etc
//                             </ListItem>
//                         </ul>
//                     </NavigationMenuContent>
//                 </NavigationMenuItem>
//                 <NavigationMenuItem>
//                     <NavigationMenuTrigger>Help Centre</NavigationMenuTrigger>
//                     <NavigationMenuContent>
//                         <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
//                             {components.map((component) => (
//                                 <ListItem
//                                     key={component.title}
//                                     title={component.title}
//                                     href={component.href}
//                                 >
//                                     {component.description}
//                                 </ListItem>
//                             ))}
//                         </ul>
//                     </NavigationMenuContent>
//                 </NavigationMenuItem>
//                 <NavigationMenuItem>
//                     <a href="https://whitepaper.creat-or.io/" target="_blank" rel="noopener noreferrer">
//                         <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                             Whitepaper
//                         </NavigationMenuLink>
//                     </a>
//                 </NavigationMenuItem>
//             </NavigationMenuList>
//         </NavigationMenu>
//     )
// }
//
// const ListItem = React.forwardRef<
//     React.ElementRef<"a">,
//     React.ComponentPropsWithoutRef<"a">
// >(({className, title, children, href = '', ...props }, ref) => {
//     return (
//         <li>
//             <NavigationMenuLink asChild>
//                 <Link
//                     href={href}
//                     className={cn(
//                         "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//                         className
//                     )}
//                     {...props}
//                 >
//                     <div className="text-sm font-medium leading-none">{title}</div>
//                     <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//                         {children}
//                     </p>
//                 </Link>
//             </NavigationMenuLink>
//         </li>
//     )
// })
// ListItem.displayName = "ListItem"