export enum AtlassianSupportLanguage {
  ActionScript = "actionscript",
  Ada = "ada",
  AppleScript = "applescript",
  Bash = "bash",
  C = "c",
  CSharp = "c#",
  CPlusPlus = "c++",
  CPP = "cpp",
  CSS = "css",
  Erlang = "erlang",
  Go = "go",
  Groovy = "groovy",
  Haskell = "haskell",
  HTML = "html",
  Java = "java",
  JavaScript = "javascript",
  JS = "js",
  JSON = "json",
  Lua = "lua",
  None = "none",
  nyan = "nyan",
  ObjectiveC = "objc",
  Perl = "perl",
  PHP = "php",
  Python = "python",
  R = "r",
  Rainbow = "rainbow",
  Ruby = "ruby",
  Scala = "scala",
  sh = "sh",
  SQL = "sql",
  Swift = "swift",
  VisualBasic = "visualbasic",
  XML = "xml",
  YAML = "yaml"
}

// See also: https://github.com/github/linguist/blob/master/lib/linguist/languages.yml
export const markdownToWikiMarkupLanguageMapping: {
  [key: string]: AtlassianSupportLanguage;
} = {
  "actionscript 3": AtlassianSupportLanguage.ActionScript,
  actionscript3: AtlassianSupportLanguage.ActionScript,
  as3: AtlassianSupportLanguage.ActionScript,
  ada95: AtlassianSupportLanguage.Ada,
  ada2005: AtlassianSupportLanguage.Ada,
  osascript: AtlassianSupportLanguage.AppleScript,
  zsh: AtlassianSupportLanguage.Bash,
  csharp: AtlassianSupportLanguage.CSharp,
  sass: AtlassianSupportLanguage.CSS,
  scss: AtlassianSupportLanguage.CSS,
  golang: AtlassianSupportLanguage.Go,
  htm: AtlassianSupportLanguage.HTML,
  node: AtlassianSupportLanguage.JavaScript,
  "obj-c": AtlassianSupportLanguage.ObjectiveC,
  objectivec: AtlassianSupportLanguage.ObjectiveC,
  cperl: AtlassianSupportLanguage.Perl,
  inc: AtlassianSupportLanguage.PHP,
  rusthon: AtlassianSupportLanguage.Python,
  python3: AtlassianSupportLanguage.Python,
  rscript: AtlassianSupportLanguage.R,
  splus: AtlassianSupportLanguage.R,
  jruby: AtlassianSupportLanguage.Ruby,
  macruby: AtlassianSupportLanguage.Ruby,
  rake: AtlassianSupportLanguage.Ruby,
  rb: AtlassianSupportLanguage.Ruby,
  rbx: AtlassianSupportLanguage.Ruby,
  shell: AtlassianSupportLanguage.sh,
  vb: AtlassianSupportLanguage.VisualBasic,
  vbnet: AtlassianSupportLanguage.VisualBasic,
  "vb.net": AtlassianSupportLanguage.VisualBasic,
  rss: AtlassianSupportLanguage.XML,
  xsd: AtlassianSupportLanguage.XML,
  wsdl: AtlassianSupportLanguage.XML,
  yml: AtlassianSupportLanguage.YAML
};
