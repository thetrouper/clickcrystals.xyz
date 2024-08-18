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
  "ImproperIssues": "https://github.com/itzispyder"
}

const projects = [
  {
    name: "PDK (Plugin Development Kit)",
    description: "Plugin Development Kit for Developing Minecraft Spigot Plugins",
    links: {
      "GitHub": "https://github.com/ItziSpyder/pdk",
    },
    author: "ImproperIssues",
  },
  {
    name: "CrosshairTarget",
    description: "Changes your crosshair in-game depending on context.",
    links: {
      "GitHub": "https://github.com/ItziSpyder/CrosshairTarget",
      "Modrinth": "https://modrinth.com/mod/crosshairtarget",
    },
    author: "ImproperIssues",
  },
  {
    name: "Moblist",
    description: "Minecraft mod that lets you debug list of entities in your world",
    links: {
      "GitHub": "https://github.com/ItziSpyder/mobslist",
    },
    author: "ImproperIssues",
  },
  {
    name: "FunnySentences",
    description: "Generate funny sentences!",
    links: {
      "GitHub": 'https://github.com/ItziSpyder/FunnySentences',
      'Modrinth': 'https://modrinth.com/mod/funnysentences',
    },
    author: "ImproperIssues",
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
                    <Link href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                      {label}
                    </Link>{" "}
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
