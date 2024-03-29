import { SSTConfig } from "sst";
import { StorageStack } from "./stacks/StorageStack"

export default {
  config(_input) {
    return {
      name: "notes",
      region: "ap-southeast-2",
    };
  },
  stacks(app) {
    app.stack(StorageStack);
  }
} satisfies SSTConfig;
