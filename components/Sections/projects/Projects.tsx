import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from "next/link";
const authors = {
  "ImproperIssues": "https://github.com/itzispyder",
  "TheTrouper": "https://github.com/thetrouper",
  "I-No-oNe": "https://github.com/I-No-oNe"
}

const projects = [
  {
    name: "PDK (Plugin Development Kit)",
    description: "Plugin Development Kit for developing Minecraft Spigot Plugins",
    links: {
      "GitHub": "https://github.com/ItziSpyder/pdk"
    },
    author: "ImproperIssues"
  },
  {
    name: "Impropers 3D Minimap",
    description: "Minimap but with 3D terrain!",
    links: {
      "GitHub": "https://github.com/ItziSpyder/Impropers3DMinimap",
      "Modrinth": "https://modrinth.com/mod/impropers-3d-minimap"
    },
    author: "ImproperIssues"
  },
  {
    name: "CrosshairTarget",
    description: "Changes your crosshair in-game depending on context.",
    links: {
      "GitHub": "https://github.com/ItziSpyder/CrosshairTarget",
      "Modrinth": "https://modrinth.com/mod/crosshairtarget"
    },
    author: "ImproperIssues"
  },
  {
    name: "Moblist",
    description: "Minecraft mod that lets you debug list of entities in your world",
    links: {
      "GitHub": "https://github.com/ItziSpyder/mobslist"
    },
    author: "ImproperIssues"
  },
  {
    name: "ImproperUI",
    description: "A rendering library using scripts!",
    links: {
      "GitHub": "https://github.com/ItziSpyder/ImproperUi",
      "Modrinth": "https://modrinth.com/mod/ImproperUi"
    },
    author: "ImproperIssues"
  },
  {
    name: "Advanced AutoClicker",
    description: "Advanced Autoclicker for Minecraft!",
    links: {
      "GitHub": "https://github.com/ItziSpyder/adv-autoclicker",
      "Modrinth": "https://modrinth.com/mod/autoclicker"
    },
    author: "ImproperIssues"
  },
  {
    name: "Health Indicators",
    description: "Renders player health above their heads",
    links: {
      "GitHub": "https://github.com/ItziSpyder/health-indicators",
      "Modrinth": "https://modrinth.com/mod/healthindicators"
    },
    author: "ImproperIssues"
  },
  {
    name: "CC+",
    description: "An old Version of ClickCrystals, but with a rat on the chat event listener class",
    links: {
      "GitHub": "https://github.com/thetrouper/ClickCrystalsPlus"
    },
    author: "TheTrouper"
  },
  {
    name: "View Model",
    description: "A mod that let you change the hands positions 👐",
    links: {
      "GitHub": "https://github.com/I-No-oNe/View-Model",
      "Modrinth": "https://modrinth.com/mod/no-ones-view-model"
    },
    author: "I-No-oNe"
  },
  {
    name: "Free Camera",
    description: "A minecraft mod that let your camera to be free while the player isn't moving 📸",
    links: {
      "GitHub": "https://github.com/I-No-oNe/Free-Camera"
    },
    author: "I-No-oNe"
  },
  {
    name: "The CC+ Pack",
    description: "The official ClickCrystalPlus Pack!",
    links: {
      "GitHub": "https://github.com/I-No-oNe/ClickCrystalPlus-Pack",
      "Modrinth": "https://modrinth.com/resourcepack/clickcrystalplus-pack"
    },
    author: "I-No-oNe"
  },
  {
    name: "Glowing Entities",
    description: "Minecraft client-side mod that makes entities glow in the dark!",
    links: {
      "GitHub": "https://github.com/I-No-oNe/Glowing-entities",
      "Modrinth": "https://modrinth.com/mod/Glowing-entities"
    },
    author: "I-No-oNe"
  },
  {
    name: "Mod By No-oNe",
    description: "Mod that \"No one\" will ever use",
    links: {
      "GitHub": "https://github.com/I-No-oNe/Mod-by-no-one/"
    },
    author: "I-No-oNe"
  }
];

export default function Projects() {
  return (
    <>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Project</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="w-[200px]">Link</TableHead>
            <TableHead className="w-[150px]">Author</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{project.name}</TableCell>
              <TableCell>{project.description}</TableCell>
              <TableCell>
                {Object.entries(project.links).map(([label, link], linkIndex) => (
                  <div key={linkIndex}>
                    {link === "" ? (
                      <span className="text-red-600">
                        {label}{" "}
                      </span>
                    ) : (
                      <Link href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                        {label}{" "}
                      </Link>
                    )}
                  </div>
                ))}
              </TableCell>
              <TableCell>
                <Link href={authors[project.author as keyof typeof authors]} target="_blank" rel="noopener noreferrer" className="text-blue-900">
                  {project.author}
                </Link>{" "}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
