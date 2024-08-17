/* eslint-disable quotes */

// This config defines how the language is displayed in the editor.
export const languageDef = {
  defaultToken: "",
  tokenPostfix: ".ccs",

  keywords: [
    "def",
    "module",
    "desc",
    "on",
    "if",
    "wait",
    "while",
    "loop_period",
    "input",
    "if_not",
    "holding",
    "description",
    "attack",
    "use",
    "say",
    "execute",
    "result",
    "remove",
    "add",
    "execute_period",
    "positioned",
    "run",
    "kill",
    "summon",
    "velocity",
    "chance_of",
    "hotbar_has",
    "holding",
    "target_block",
    "target_entity",
    "entity_in_range",
    "sneak",
    "jump",
    "forward",
    "backward",
    "strafe_left",
    "strafe_right",
    "gui_swap",
    "gui_quickmove",
    "gui_switch",
    "wait_random",
    "off_holding",
  ],

  operators: [
    "=",
    ">",
    "<",
    "!",
    "~",
    "?",
    ":",
    "==",
    "<=",
    ">=",
    "!=",
    "&&",
    "||",
    "++",
    "--",
    "+",
    "-",
    "*",
    "/",
    "&",
    "|",
    "^",
    "%",
  ],

  // Regular expressions
  symbols: /[=><!~?:&|+\-*\/\^%]+/,
  escapes:
    /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
  digits: /\d+(_+\d+)*/,

  // The main tokenizer for our language
  tokenizer: {
    root: [
      // comments
      [/@\w+/, "comment.author"],
      [/\/\/.*/, "comment"],

      // keywords and commands
      [
        /\b(def|module|desc|on|if|wait|while|loop_period|input|attack|use|say|execute|store|result|score|remove|add|execute_period|positioned|run|kill|summon|playsound|velocity|chance_of|hotbar_has|holding|target_block|target_entity|entity_in_range|as|from|get|data|modify|sneak|jump|forward|backward|strafe_left|strafe_right|gui_swap|gui_quickmove|gui_switch|wait_random|off_holding)\b/,
        "keyword",
      ],

      // identifiers
      [
        /[a-zA-Z_]\w*/,
        {
          cases: {
            "@keywords": "keyword",
            "@default": "identifier",
          },
        },
      ],

      // delimiters and operators
      [/[{}()\[\]]/, "@brackets"],
      [
        /@symbols/,
        {
          cases: {
            "@operators": "delimiter",
            "@default": "",
          },
        },
      ],

      // strings
      [/"([^"\\]|\\.)*$/, "string.invalid"], // non-terminated string
      [/"/, "string", "@string"],

      // characters
      [/'[^\\']'/, "string"],
      [/(')(@escapes)(')/, ["string", "string.escape", "string"]],
      [/'/, "string.invalid"],
    ],

    // whitespace
    whitespace: [[/[\s\t\r\n]+/, ""]],

    // strings
    string: [
      [/[^\\"]+/, "string"],
      [/@escapes/, "string.escape"],
      [/\\./, "string.escape.invalid"],
      [/"/, "string", "@pop"],
    ],
  },
};

// This config defines the editor's behavior.
export const configuration = {
  comments: {
    lineComment: "//",
  },
  brackets: [
    ["{", "}"], ["[", "]"], ["(", ")"],
  ],
}

export const theme = {
  base: "vs-dark",
  inherit: true,
  rules: [
    // Comments
    { token: "comment", foreground: "6A9955" }, // Light green for comments
    { token: "comment.author", foreground: "7A9A5B" }, // Slightly different green for author comments

    // Keywords
    { token: "keyword", foreground: "C586C0" }, // Light purple for keywords

    // Identifiers
    { token: "identifier", foreground: "9CDCFE" }, // Light blue for identifiers

    // Delimiters and operators
    { token: "delimiter", foreground: "D4D4D4" }, // Light grey for delimiters

    // Strings
    { token: "string", foreground: "CE9178" }, // Light orange for strings

    // Characters
    { token: "string.escape", foreground: "CE9178" }, // Same as strings

    // Brackets
    { token: "brackets", foreground: "D4D4D4" }, // Light grey for brackets

    // Miscellaneous
    { token: "custom-info", foreground: "9CDCFE" }, // Custom color for info
    { token: "custom-error", foreground: "FF5C5C", fontStyle: "bold" }, // Custom color for errors
    { token: "custom-notice", foreground: "FFA07A" }, // Custom color for notices
    { token: "custom-date", foreground: "B5CEA8" }, // Custom color for dates
  ],
  colors: {},
};