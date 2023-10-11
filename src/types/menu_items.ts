export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export interface ComplexImage {
	image: Image,
	details?: string,
	description?: string,
	clickthroughUrl?: string,
}

export enum C_allergens {
	DAIRY = "Dairy",
	WHEAT = "Wheat",
	PEANUTS = "Peanuts",
	SHELLFISH = "Shellfish",
}

export enum LinkType {
	OTHER = "Other",
	URL = "URL",
	PHONE = "Phone",
	EMAIL = "Email",
}

export interface C_primaryCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export default interface Ce_menuItem {
	landingPageUrl?: string,
	primaryPhoto?: ComplexImage,
	description?: string,
	name: string,
	c_activeOnSearch?: boolean,
	c_allergens?: C_allergens[],
	c_calories?: string,
	c_primaryCTA?: C_primaryCTA,
	keywords?: string[],
	id: string,
}
