// import {
//   BlockArgs,
//   platforma,
// } from '@pl-open/my-org.block-boilerplate.model';
// import { awaitStableState, blockTest } from '@pl-open/sdk-test';
// import { blockSpec as myBlockSpec } from 'this-block';
// import { InferBlockState, wrapOutputs } from '@pl-open/sdk-ui';

// blockTest(
//   'preset content',
//   { timeout: 30000 },
//   async ({ rawPrj: project, ml, helpers, expect }) => {
//     const blockId = await project.addBlock('Block', myBlockSpec);
//     await project.setBlockArgs(blockId, {
//       argument: 'World!!',
//     } satisfies BlockArgs);
//     const stableState = (await awaitStableState(
//       project.getBlockState(blockId),
//       250000
//     )) as InferBlockState<typeof platforma>;
//     const output = wrapOutputs(stableState.outputs).transformedArg;
//     expect(output).toEqual('Hello World!!!');
//   }
// );
