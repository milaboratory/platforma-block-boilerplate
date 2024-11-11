import { tplTest } from "@platforma-sdk/test";

tplTest(
  'should return a concatenated string',
  async ({ helper, expect }) => {
    const results = await helper.renderWorkflow("main", false, {
      name: 'World'
    });

    const pythonMessage = results.output("pythonMessage", (a) => a?.getDataAsJson<string>());
    expect(await pythonMessage.awaitStableValue()).eq('Hello, World!');

    const tengoMessage = results.output("tengoMessage", (a) => a?.getDataAsJson<string>());
    expect(await tengoMessage.awaitStableValue()).eq('Hello, World!');
  }
);
