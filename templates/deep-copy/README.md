# deep-copy

Utility for recursively cloning primitives, arrays, objects, Maps/Sets, and even cyclic graphs. Tests rely on Vitest to assert both structural equality (`toEqual`) and reference independence (`not.toBe`).

Run only this folder’s specs:

```bash
npm run test -- deep-copy
```
