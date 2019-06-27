const plugin = require("./package.json");
const { name, meta } = plugin;

require("@jabuco/use-loader")({
  // default options
  defaults: {},
  // meta data for plugin system
  meta,
  // initialization hook (optional)
  load(options) {
    console.log("[plugin-test] initializing plugin %s", name);
    console.log("[plugin-test] args: ", options);
    console.log("[plugin-test] api: ", this);
    // do setup work here ...
  },
  // unload hook (optional)
  unload: (...args) => {
    console.log("[plugin-test] unloading plugin %s", name);
    // do tidy up work here ...
  },

  // api
  test(...args) {
    // this: manager.api & plugin api
    console.log(
      "[plugin-test] running api endpoint 'api.contributed.testplugin.test'"
    );
    console.log("[plugin-test]", this.api.unloadPlugin("plugin-test"));
  }
});
