import type { InferOutputsType } from '@platforma-sdk/model';
import { BlockModel } from '@platforma-sdk/model';

export type BlockArgs = {
  name?: string;
};

export const model = BlockModel.create<BlockArgs>()

  .initialArgs({})

  .output('tengoMessage', (ctx) => ctx.outputs?.resolve('tengoMessage')?.getDataAsJson())

  .output('pythonMessage', (ctx) => ctx.outputs?.resolve('pythonMessage')?.getDataAsString())

  .sections([{ type: 'link', href: '/', label: 'Main' }])

  .done();

export type BlockOutputs = InferOutputsType<typeof model>;
