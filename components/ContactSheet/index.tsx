// components/ContactSheet.tsx
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import { ArrowDownToLine } from "lucide-react";
import { IoMailOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";

export function ContactSheet({ children }: { children: React.ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Contact</SheetTitle>
          <SheetDescription>
            You can contact me via LinkedIn or reach out directly through email.
          </SheetDescription>
        </SheetHeader>

        <div className="flex justify-center gap-6 ">
          <a href="https://www.linkedin.com/in/onurcangonul/" target="_blank">
            <Card className="p-4 rounded-md hover:bg-muted cursor-pointer transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_rgba(0,0,0,0.75)] dark:hover:shadow-[6px_6px_0px_rgba(255,255,255,0.2)]">
              <CardContent className="flex items-center justify-center">
                <CiLinkedin size={32} className="text-primary" />
              </CardContent>
            </Card>
          </a>

          <a href="mailto:onurcangonul@gmail.com">
            <Card className="p-4 rounded-md hover:bg-muted cursor-pointer transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_rgba(0,0,0,0.75)] dark:hover:shadow-[6px_6px_0px_rgba(255,255,255,0.2)]">
              <CardContent className="flex items-center justify-center">
                <IoMailOutline size={32} className="text-primary" />
              </CardContent>
            </Card>
          </a>
        </div>
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-border" />
          <p className="text-base md:text-lg text-primary font-medium">or</p>
          <div className="h-px w-12 bg-border" />
        </div>
        <div className="flex items-center justify-center gap-3">
          <Button asChild>
            <a 
              href="/docs/resume.pdf" 
              download="Onurcan-Gonul-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="duration-300 hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.35)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]"
            >
              <ArrowDownToLine className="mr-2 h-4 w-4" />
              Download My Resume
            </a>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
