"use client";

import { Project, DocBlock } from "@/types/project";
import { FC } from "react";

type Props = {
  project: Project;
};

const ProjectCard: FC<Props> = ({ project }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-xl border border-gray-600 shadow-sm space-y-4">
      <header>
        <h2 className="text-xl font-bold text-blue-400">{project.name}</h2>
        {project.description && (
          <p className="text-sm text-gray-300">{project.description}</p>
        )}
      </header>

      <section className="space-y-4">
        {project.blocks.map((block) => (
          <BlockRenderer key={block.id} block={block} />
        ))}
      </section>
    </div>
  );
};

export default ProjectCard;

// ----------------------------
// 👇 Block Renderer
// ----------------------------
const BlockRenderer: FC<{ block: DocBlock }> = ({ block }) => {
  const {
    type,
    content,
    formatting,
    level,
    items,
    imageUrl,
    altText,
    caption,
    alignment,
    codeLanguage,
    showLineNumbers,
  } = block;

  const formatClass = [
    formatting?.bold ? "font-bold" : "",
    formatting?.italic ? "italic" : "",
    formatting?.underline ? "underline" : "",
  ].join(" ");

  switch (type) {
    case "heading":
    case "subheading":
      const HeadingTag = `h${level ?? 2}` as keyof JSX.IntrinsicElements;
      return (
        <HeadingTag className="text-lg text-white font-semibold">
          {content}
        </HeadingTag>
      );

    case "paragraph":
    case "quote":
      return <p className={`text-white ${formatClass}`}>{content}</p>;

    case "bulleted_list":
      return (
        <ul className="list-disc ml-6 text-white">
          {items?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );

    case "numbered_list":
      return (
        <ol className="list-decimal ml-6 text-white">
          {items?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      );

    case "image":
      return (
        <figure className={`flex flex-col items-${alignment ?? "center"}`}>
          {imageUrl && (
            <img
              src={imageUrl}
              alt={altText ?? ""}
              className="rounded shadow-md max-w-full"
            />
          )}
          {caption && (
            <figcaption className="text-sm text-gray-400 mt-1">
              {caption}
            </figcaption>
          )}
        </figure>
      );

    case "code":
      return (
        <pre className="bg-gray-900 text-green-400 p-3 rounded text-sm overflow-x-auto">
          <code>{content}</code>
        </pre>
      );

    default:
      return null;
  }
};
