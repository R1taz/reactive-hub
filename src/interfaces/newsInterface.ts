export interface ResponseGetApiNews {
	status: string
	news: INews[]
	page: number
}

export interface RequestGetApiNews {
	page_number: number
	page_size: number
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
