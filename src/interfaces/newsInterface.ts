export interface ResponseGetNews {
	status: string
	news: INews[]
	page: number
}

export interface RequestGetNews {
	page_number: number
	page_size: number
	keywords: string
	category: INewsCategories
}

export interface ResponseGetCategoriesNews {
	categories: INewsCategories[]
	description: string
	status: string
}

export interface INews {
	id: string
	title: string
	description: string
	url: string
	author: string
	image: string
	language: string
	category: string[]
	published: string
}

export type INewsCategories =
	| 'all'
	| 'regional'
	| 'technology'
	| 'lifestyle'
	| 'business'
	| 'general'
	| 'programming'
	| 'science'
	| 'entertainment'
	| 'world'
	| 'sports'
	| 'finance'
	| 'academia'
	| 'politics'
	| 'health'
	| 'opinion'
	| 'food'
	| 'game'
	| 'fashion'
	| 'academic'
	| 'crap'
	| 'travel'
	| 'culture'
	| 'economy'
	| 'environment'
	| 'art'
	| 'music'
	| 'notsure'
	| 'CS'
	| 'education'
	| 'redundant'
	| 'television'
	| 'commodity'
	| 'movie'
	| 'entrepreneur'
	| 'review'
	| 'auto'
	| 'energy'
	| 'celebrity'
	| 'medical'
	| 'gadgets'
	| 'design'
	| 'EE'
	| 'security'
	| 'mobile'
	| 'estate'
	| 'funny'
