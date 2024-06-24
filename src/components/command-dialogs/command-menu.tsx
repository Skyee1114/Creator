// "use client"
//
// import * as React from "react"
// import {
//     MagnifyingGlassIcon,
// } from "@radix-ui/react-icons"
//
// import {
//     CommandDialog,
//     CommandEmpty,
//     CommandGroup,
//     CommandInput,
//     CommandItem,
//     CommandList,
//     CommandSeparator,
//     CommandShortcut,
// } from "@/components/ui/command"
// import {Coffee, HomeHashtag, I24Support, Notepad2, StatusUp} from "iconsax-react";
//
// export function CommandDialogTest() {
//     const [open, setOpen] = React.useState(false)
//
//     React.useEffect(() => {
//         const down = (e: KeyboardEvent) => {
//             if (e.key === "s" && (e.metaKey || e.ctrlKey)) {
//                 e.preventDefault()
//                 setOpen((open) => !open)
//             }
//         }
//
//         document.addEventListener("keydown", down)
//         return () => document.removeEventListener("keydown", down)
//     }, [])
//
//     return (
//         <>
//             <p
//                 className="flex items-center text-sm text-foreground  cursor-pointer"
//                 onClick={() => setOpen(true)}
//             >
//                 <MagnifyingGlassIcon className="mr-2"/>
//                 <span className="mr-2">Search</span>
//                 <kbd
//                     className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
//                     <span className="text-xs">⌘</span>S
//                 </kbd>
//             </p>
//
//             <CommandDialog open={open} onOpenChange={setOpen}>
//                 <CommandInput placeholder="Type a command or search..."/>
//                 <CommandList>
//                     <CommandEmpty>No results found.</CommandEmpty>
//                     <CommandGroup heading="Suggestions">
//                         <CommandItem>
//                             <Notepad2 className="mr-2 h-4 w-4"/>
//                             <span>What assets do I have?</span>
//                         </CommandItem>
//                         <CommandItem>
//                             <StatusUp className="mr-2 h-4 w-4"/>
//                             <span>Show my Investments</span>
//                         </CommandItem>
//                         <CommandItem>
//                             <HomeHashtag className="mr-2 h-4 w-4"/>
//                             <span>Search Marketplace for NFTs</span>
//                         </CommandItem>
//                     </CommandGroup>
//                     <CommandSeparator/>
//                     <CommandGroup heading="Support">
//                         <CommandItem>
//                             <I24Support className="mr-2 h-4 w-4"/>
//                             <span>Help Centre</span>
//                             <CommandShortcut>⌘H</CommandShortcut>
//                         </CommandItem>
//                         <CommandItem>
//                             <Coffee className="mr-2 h-4 w-4"/>
//                             <span>Feedback</span>
//                             <CommandShortcut>⌘F</CommandShortcut>
//                         </CommandItem>
//                     </CommandGroup>
//                 </CommandList>
//             </CommandDialog>
//
//         </>
//     )
// }