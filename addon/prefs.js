// The EPUB reader stores its GLOBAL settings (fontOffset, imageScale,
// lineHeight, fontFamily) at runtime under `extensions.zotero.zotero-epub.*`.
// No default preferences are declared on purpose: `Zotero.Prefs.get` must keep
// returning `undefined` for unset keys so the reader leaves the EPUB's own
// styling untouched until the user changes a control.
