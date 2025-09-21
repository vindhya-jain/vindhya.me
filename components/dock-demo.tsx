import React from "react";
import {
  IoDocumentText,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMail,
} from "react-icons/io5";

import { Dock, DockIcon } from "@/components/dock";
import { siteConfig } from "@/config/site";

export type IconProps = React.HTMLAttributes<SVGElement>;

interface DockDemoProps {
  resumeUrl: string;
}

export function DockDemo({ resumeUrl }: DockDemoProps) {
  return (
    <button className="self-end" onMouseDown={(e) => e.stopPropagation()}>
      <Dock>
        <DockIcon url={resumeUrl} tooltip="Resume">
          <IoDocumentText className="h-5 w-5" />
        </DockIcon>
        <DockIcon url={siteConfig.links.github} tooltip="GitHub">
          <IoLogoGithub className="h-5 w-5" />
        </DockIcon>
        <DockIcon url={siteConfig.links.linkedin} tooltip="LinkedIn">
          <IoLogoLinkedin className="h-5 w-5" />
        </DockIcon>
        <DockIcon url={siteConfig.links.email} tooltip="Email">
          <IoMail className="h-5 w-5" />
        </DockIcon>
      </Dock>
    </button>
  );
}
