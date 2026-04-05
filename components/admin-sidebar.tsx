"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  UserPlus,
  LogOut,
  ChevronDown,
  User,
  Shield,
  Bell,
} from "lucide-react"

interface SidebarProps {
  className?: string
}

export function AdminSidebar({ className }: SidebarProps) {
  const t = useTranslations("nav")
  const pathname = usePathname()
  const router = useRouter()
  const [settingsOpen, setSettingsOpen] = useState(false)

  const menuItems = [
    {
      title: t("dashboard"),
      icon: LayoutDashboard,
      href: "/dashboard",
    },
    {
      title: t("customers"),
      icon: Users,
      href: "/customers",
    },
    {
      title: t("blogs"),
      icon: FileText,
      href: "/blogs",
    },
    {
      title: t("assignUser"),
      icon: UserPlus,
      href: "/assign-user",
    },
  ]

  const settingsItems = [
    {
      title: t("profile"),
      icon: User,
      href: "/settings/profile",
    },
    {
      title: t("security"),
      icon: Shield,
      href: "/settings/security",
    },
    {
      title: t("notifications"),
      icon: Bell,
      href: "/settings/notifications",
    },
  ]

  const handleLogout = () => {
    router.push("/login")
  }

  return (
    <div className={cn("pb-12 w-64", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">VENTA Company</h2>
          <div className="space-y-1">
            {menuItems.map((item) => (
              <Button
                key={item.href}
                variant={pathname === item.href ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => router.push(item.href)}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.title}
              </Button>
            ))}

            <Collapsible open={settingsOpen} onOpenChange={setSettingsOpen}>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  {t("settings")}
                  <ChevronDown className="ml-auto h-4 w-4" />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-1">
                {settingsItems.map((item) => (
                  <Button
                    key={item.href}
                    variant={pathname === item.href ? "secondary" : "ghost"}
                    className="w-full justify-start pl-8"
                    onClick={() => router.push(item.href)}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.title}
                  </Button>
                ))}
              </CollapsibleContent>
            </Collapsible>

            <Button
              variant="ghost"
              className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              {t("logout")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
