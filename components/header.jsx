"use client";
import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Switch } from "./ui/switch";
import { useTheme } from "next-themes";
const DashboardHeader = ({ group, item }) => {
  const { setTheme } = useTheme();
  const [theme, setThemeState] = useState(null);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setThemeState(theme);
    }
  }, []);
  useEffect(() => {
    if (theme) {
      setTheme(theme);
    }
  }, [theme, setTheme]);
  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 px-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#">{group}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>{item}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <Switch
        checked={theme === "dark"}
        onCheckedChange={(e) => {
          setThemeState(e ? "dark" : "light");
          localStorage.setItem("theme", e ? "dark" : "light");
        }}
      />
    </header>
  );
};

export default DashboardHeader;
