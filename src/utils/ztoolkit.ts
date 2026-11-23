import { BasicTool, unregister } from "zotero-plugin-toolkit";
import { config } from "../../package.json";

export { createZToolkit };

function createZToolkit() {
  const _ztoolkit = new ZoteroToolkit();
  initZToolkit(_ztoolkit);
  return _ztoolkit;
}

function initZToolkit(_ztoolkit: ReturnType<typeof createZToolkit>) {
  const env = __env__;
  _ztoolkit.basicOptions.log.prefix = `[${config.addonName}]`;
  _ztoolkit.basicOptions.log.disableConsole = env === "production";
  _ztoolkit.basicOptions.api.pluginID = config.addonID;
}

/**
 * Minimal on-demand toolkit (zotero-plugin-toolkit v6 no longer ships an
 * all-in-one `ZoteroToolkit`). This plugin only needs the `BasicTool`
 * helpers — `log` and element registration/unregistration — so nothing else
 * is bundled. If a feature starts using another module (UI, ProgressWindow,
 * Reader…), add it here as a field and construct it in the constructor, e.g.
 *   UI: UITool;            ->  this.UI = new UITool(this);
 *   ProgressWindow: typeof ProgressWindowHelper;
 *                         ->  this.ProgressWindow = makeHelperTool(ProgressWindowHelper, this);
 */
class ZoteroToolkit extends BasicTool {
  unregisterAll() {
    unregister(this);
  }
}
