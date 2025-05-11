import type { JSX } from "react";

interface TextSectionProps {
	title: string;
	subtitle?: string;
	content: string | JSX.Element;
	listItems?: string[];
	bgColor?: string;
	textColor?: string;
	imageSrc?: string;
	imageAlt?: string;
	imagePosition?: "left" | "right";
}

export default function TextSection({
	title,
	subtitle,
	content,
	listItems,
	bgColor = "bg-white",
	textColor = "text-gray-800",
	imageSrc,
	imageAlt = "",
	imagePosition = "left",
}: TextSectionProps) {
	return (
		<section className={`${bgColor} p-8 sm:p-16 space-y-4`}>
			<div
				className={`flex flex-col ${
					imageSrc ? "sm:flex-row sm:items-center" : ""
				} ${imagePosition === "right" ? "sm:flex-row-reverse" : ""} gap-8`}
			>
				{imageSrc && (
					<div className="flex-shrink-0 sm:w-1/3">
						<img
							src={imageSrc}
							alt={imageAlt}
							className="w-full h-auto rounded-lg shadow-md"
						/>
					</div>
				)}
				<div className="flex-1">
					<h2 className={`text-lg sm:text-2xl font-semibold ${textColor}`}>
						{title}
					</h2>
					{subtitle && <p className="italic text-gray-500">{subtitle}</p>}
					<div className={`${textColor}`}>{content}</div>
					{listItems && (
						<ul className="list-disc list-inside">
							{listItems.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</section>
	);
}
