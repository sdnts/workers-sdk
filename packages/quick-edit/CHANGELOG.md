# @cloudflare/quick-edit

## 0.3.3

### Patch Changes

- [#9649](https://github.com/cloudflare/workers-sdk/pull/9649) [`ec9b417`](https://github.com/cloudflare/workers-sdk/commit/ec9b417f8ed711e7b5044410e83d781f123a6a62) Thanks [@petebacondarwin](https://github.com/petebacondarwin)! - patch release to trigger a test release

## 0.3.2

### Patch Changes

- [#7040](https://github.com/cloudflare/workers-sdk/pull/7040) [`44c954b`](https://github.com/cloudflare/workers-sdk/commit/44c954b98ac86e9ea98f6e589c419d40c5d7f122) Thanks [@penalosa](https://github.com/penalosa)! - Try and ensure the `d.ts` types are definitely the ones loaded in `quick-edit-extension`

## 0.3.1

### Patch Changes

- [#6998](https://github.com/cloudflare/workers-sdk/pull/6998) [`720a91d`](https://github.com/cloudflare/workers-sdk/commit/720a91d501ca04f677ab75f9da8f4b8b6d24a56f) Thanks [@edmundhung](https://github.com/edmundhung)! - chore: fix build config

## 0.3.0

### Minor Changes

- [#6962](https://github.com/cloudflare/workers-sdk/pull/6962) [`a204747`](https://github.com/cloudflare/workers-sdk/commit/a204747e04afa7592d0cbb5d9fb35d9cd0b2cd49) Thanks [@edmundhung](https://github.com/edmundhung)! - feat: lower autosave delay to 200ms

## 0.2.3

### Patch Changes

- [#6850](https://github.com/cloudflare/workers-sdk/pull/6850) [`ce41da5`](https://github.com/cloudflare/workers-sdk/commit/ce41da555a9520382a1e16cd7269253f0b733d51) Thanks [@penalosa](https://github.com/penalosa)! - fix: Re-release Quick Edit to update included workers-types

## 0.2.2

### Patch Changes

- [#6806](https://github.com/cloudflare/workers-sdk/pull/6806) [`4db75e1`](https://github.com/cloudflare/workers-sdk/commit/4db75e1eaf8eb088d869986efc28d5345789ff50) Thanks [@penalosa](https://github.com/penalosa)! - chore: Revert "fix(quick-edit): disable autosave"

## 0.2.1

### Patch Changes

- [#6738](https://github.com/cloudflare/workers-sdk/pull/6738) [`d818634`](https://github.com/cloudflare/workers-sdk/commit/d8186341980ab2c02917852a9e790a7655f93a78) Thanks [@edmundhung](https://github.com/edmundhung)! - fix: set readOnly property when writing files

## 0.2.0

### Minor Changes

- [#6708](https://github.com/cloudflare/workers-sdk/pull/6708) [`31bfd37`](https://github.com/cloudflare/workers-sdk/commit/31bfd374cf6764c1e8a4491518c58cb112010340) Thanks [@penalosa](https://github.com/penalosa)! - chore: Trigger a re-deploy

## 0.1.1

### Patch Changes

- [#6624](https://github.com/cloudflare/workers-sdk/pull/6624) [`66f5b25`](https://github.com/cloudflare/workers-sdk/commit/66f5b259a760e4a5ebe0dac01a3d82df15aa3040) Thanks [@edmundhung](https://github.com/edmundhung)! - fix: quick editor deploy script setup

## 0.1.0

### Minor Changes

- [#6546](https://github.com/cloudflare/workers-sdk/pull/6546) [`addb210`](https://github.com/cloudflare/workers-sdk/commit/addb21010dc68ff8867903b90aca438a31f0a3fc) Thanks [@edmundhung](https://github.com/edmundhung)! - feat: hide wrangler.toml and package.json with `search.exclude` support added

## 0.0.2

### Patch Changes

- [#6558](https://github.com/cloudflare/workers-sdk/pull/6558) [`2a5b648`](https://github.com/cloudflare/workers-sdk/commit/2a5b64815455a324dd57cdcf98abbcc3f7156c98) Thanks [@edmundhung](https://github.com/edmundhung)! - fix: disable autosave on quick editor to avoid context reset without explicit user action

## 0.0.1

### Patch Changes

- [#6029](https://github.com/cloudflare/workers-sdk/pull/6029) [`f5ad1d3`](https://github.com/cloudflare/workers-sdk/commit/f5ad1d3e562ce63b59f6ab136f1cdd703605bca4) Thanks [@threepointone](https://github.com/threepointone)! - chore: Normalize some dependencies in workers-sdk

  This is the first of a few expected patches that normalize dependency versions, This normalizes `undici`, `concurrently`, `@types/node`, `react`, `react-dom`, `@types/react`, `@types/react-dom`, `eslint`, `typescript`. There are no functional code changes (but there are a couple of typecheck fixes).
