const plugin = require("./package.json");
const { name, meta } = plugin;

require("@jabuco/use-loader")({
  // default options
  defaults: {},
  // meta data for plugin system
  meta,
  // initialization hook (optional)
  load(options) {
    console.log("[testplugin] initializing plugin %s", name);
    console.log("[testplugin] args: ", options);
    console.log("[testplugin] api: ", this);
    // do setup work here ...
  },
  // unload hook (optional)
  unload: (...args) => {
    console.log("[testplugin] unloading plugin %s", name);
    // do tidy up work here ...
  },

  // api
  test(...args) {
    // this: manager.api & plugin api
    console.log(
      "[testplugin] running api endpoint 'api.contributed.testplugin.test'"
    );
    console.log("[testplugin]", this.api.unloadPlugin("testplugin"));
  }
});
