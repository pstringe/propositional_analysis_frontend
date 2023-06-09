import { Value } from "./types";

/*
** Models
*/

export interface Token {
	id: number;
	text: string;
	value: Value;	
	tokenization: number[]
}

export interface Expression {
	id: number;
	value: Value;
	tokens: Token[];
}

export interface Proposition {
	id?: number;
	token: string;
	expressions: Expression[];
	value: Value;
	create: Date;
	update: Date;
}

export interface Source {
	id: Number;
	link: string;
}

export interface Citation {
	id: number;
	source: Source;
	title: string;
	date: Date;
	pagNo: string;
	index: number;
}

export interface Dialectic {
	id: number;
	name: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface Comment {
	id: number;
	createdAt: Date;
	updatedAt: Date;
}

/*
** Utils
*/

export interface FormContent {
    title: unknown;
    text?: string;
}