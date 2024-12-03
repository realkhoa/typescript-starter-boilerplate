/** @type {import('ts-jest').JestConfigWithTsJest} **/
import {pathsToModuleNameMapper} from "ts-jest";
import fs from "fs";
import decomment from 'decomment';

const data = JSON.parse(decomment(fs.readFileSync("./tsconfig.json", 'utf8')));

module.exports = {
	testEnvironment: "node",
	transform: {
		"^.+.tsx?$": ["ts-jest", {}],
	},
	roots: ['<rootDir>'],
	modulePaths: [data.compilerOptions.baseUrl],
	moduleNameMapper: pathsToModuleNameMapper(data.compilerOptions.paths)
};