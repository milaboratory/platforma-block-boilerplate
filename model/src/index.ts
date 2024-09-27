import {
  BlockModel,
  InferHrefType,
  type InferOutputsType
} from '@milaboratory/sdk-ui';
import {z} from 'zod';

export const BlockArgs = z.object({
  argument: z.string(),
}).strict();
export type BlockArgs = z.infer<typeof BlockArgs>;

export const platforma = BlockModel.create<BlockArgs>('Heavy')

  .initialArgs({
    argument: 'World',
  })

  .output('transformedArg', (ctx) => ctx.outputs?.resolve({
    field: 'transformedArg',
      assertFieldType: 'Input',
  })?.getDataAsJson<any>())

  .sections((ctx) => {
    return [
      { type: 'link', href: '/', label: 'Main' },
    ];
  })

  .inputsValid((ctx) => BlockArgs.safeParse(ctx.args).success)

  .done();

export type BlockOutputs = InferOutputsType<typeof platforma>;
export type Href = InferHrefType<typeof platforma>;
