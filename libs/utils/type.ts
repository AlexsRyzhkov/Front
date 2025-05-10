export class TypeChecker {
	static isBool(value: any): boolean {
		return typeof value === "boolean";
	}

	static isNull(value: any): boolean {
		return typeof value === null;

	}

	static isClass<T>(value: any, classType: T): boolean {
		return typeof value === typeof classType;
	}
}