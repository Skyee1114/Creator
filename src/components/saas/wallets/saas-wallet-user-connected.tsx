"use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const connectedWallets = [
    {
        key: "d36c896e-2972-4b5f-ba92-83e2302fdb77",
        value: "cn-main",
        label: "CN-Main",
    },
    {
        key: "d36c896e-2972-4b5f-ba92-83e2302fdb78",
        value: "cn-dev",
        label: "CN-Dev",
    },
    {
        key: "d36c896e-2972-4b5f-ba92-83e2302fdb79",
        value: "test-1",
        label: "Test-1",
    },
    {
        key: "d36c896e-2972-4b5f-ba92-83e2302fdb70",
        value: "test-2",
        label: "Test-2",
    },
    {
        key: "d36c896e-2972-4b5f-ba92-83e2302fdb71",
        value: "test-3",
        label: "Test-3",
    },
]

export function ConnectedWalletsUser() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("cn-main")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value
                        ? connectedWallets.find((connectedWallet) => connectedWallet.value === value)?.label
                        : "Select wallets ..."}
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search wallets ..." className="h-9" />
                    <CommandEmpty>No wallet found</CommandEmpty>
                    <CommandGroup>
                        {connectedWallets.map((connectedWallet) => (
                            <CommandItem
                                key={connectedWallet.value}
                                value={connectedWallet.value}
                                onSelect={(currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue)
                                    setOpen(false)
                                }}
                            >
                                {connectedWallet.label}
                                <CheckIcon
                                    className={cn(
                                        "ml-auto h-4 w-4",
                                        value ===connectedWallet .value ? "opacity-100" : "opacity-0"
                                    )}
                                />
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
