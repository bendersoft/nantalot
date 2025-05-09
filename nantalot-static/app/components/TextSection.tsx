import type { JSX } from "react";

interface TextSectionProps {
    title: string;
    subtitle?: string;
    content: string | JSX.Element;
    listItems?: string[];
    bgColor?: string;
    textColor?: string;
  }
  
  export default function TextSection({
    title,
    subtitle,
    content,
    listItems,
    bgColor = "bg-white",
    textColor = "text-gray-800",
  }: TextSectionProps) {
    return (
      <section className={`${bgColor} p-8 sm:p-16  space-y-4`}>
        <h2 className={`text-lg sm:text-2xl font-semibold ${textColor}`}>{title}</h2>
        {subtitle && <p className="italic text-gray-500">{subtitle}</p>}
        <div className={`${textColor}`}>{content}</div>
        {listItems && (
          <ul className="list-disc list-inside">
            {listItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </section>
    );
  }