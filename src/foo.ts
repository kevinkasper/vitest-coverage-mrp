export class Foo {
	public publicFoo(): void {
		throw new Error('Not implemented');
	}

	public async publicBar(): Promise<void> {
		throw new Error('Not implemented');
	}

	protected protectedFoo(): void {
		throw new Error('Not implemented');
	}

	protected async protectedBar(): Promise<void> {
		throw new Error('Not implemented');
	}

	private privateFoo(): void {
		throw new Error('Not implemented');
	}

	private async privateBar(): Promise<void> {
		throw new Error('Not implemented');
	}
}
