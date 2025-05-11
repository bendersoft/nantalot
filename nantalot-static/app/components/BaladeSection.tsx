import type { JSX } from "react";

type BaladeSectionProps = {
	id: string;
	title: string;
	descriptionSubtitle: string;
	description: string | JSX.Element;
	mealSubtitle: string;
	mealDescription: string | JSX.Element;
	priceSubtitle: string;
	priceDescription: string | JSX.Element;
	bgColor?: string;
	textColor?: string;
};

export default function BaladeSection({
	id,
	title,
	descriptionSubtitle,
	description,
	mealSubtitle,
	mealDescription,
	priceSubtitle,
	priceDescription,
	bgColor = "bg-white",
	textColor = "text-gray-800",
}: BaladeSectionProps) {
	return (
		<section id={id} className={`${bgColor} p-8 sm:p-16 space-y-6`}>
			<h2 className={`text-2xl font-bold ${textColor}`}>{title}</h2>
			<div className="space-y-4">
				<h3 className={`text-lg font-semibold ${textColor}`}>
					{descriptionSubtitle}
				</h3>
				<p className={`${textColor}`}>{description}</p>
			</div>
			<div className="space-y-4">
				<h3 className={`text-lg font-semibold ${textColor}`}>{mealSubtitle}</h3>
				<p className={`${textColor}`}>{mealDescription}</p>
			</div>
			<div className="space-y-4">
				<h3 className={`text-lg font-semibold ${textColor}`}>
					{priceSubtitle}
				</h3>
				<p className={`${textColor}`}>{priceDescription}</p>
			</div>
		</section>
	);
}
