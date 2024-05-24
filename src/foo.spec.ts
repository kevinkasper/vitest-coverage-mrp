import { beforeEach, describe, expect, it  } from 'vitest';

import { Foo } from './foo';

describe('Foo', () => {
	let foo: Foo;

	beforeEach((): void => {
		foo = new Foo();
	});

	it('should be defined', (): void => {
		expect(foo).toBeDefined();
	});
});
