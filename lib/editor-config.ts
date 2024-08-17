/* eslint-disable quotes */

// This config defines how the language is displayed in the editor.
export const languageDef = {
  defaultToken: "",
  tokenPostfix: ".ccs",

  keywords: [
    "on",
    "if",
    "if_not",
    "while",
    "while_not",
    "execute",
    "execute_random",
    "execute_period",
    "as",
    "wait",
    "wait_random",
    "loop",
    "loop_period",
    "print",
    "throw",
    "exit",
    "function",
    "module",
    "create",
    "description",
    "config",
    "say",
    "send",
    "notify",
    "playsound",
    "define",
    "drop",
    "teleport",
    "velocity",
    "turn_to",
    "snap_to",
    "damage",
    "switch",
    "swap",
    "input",
    "hold",
    "gui_drop",
    "gui_switch",
    "gui_swap",
    "gui_quickmove",
    "def",
    "desc",
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
      [/\/\/\s*/, "comment.text"], // colors // and following space
      [/\/\/\s*(\@[\w-]+)/, ["comment.text", "comment.author"]], // full author name like @i-no-one

      // commands and keywords
      [
        /\b(on|if|if_not|while|while_not|execute|execute_random|execute_period|as|wait|wait_random|loop|loop_period|print|throw|exit|function|module|create|description|config|say|send|notify|playsound|define|drop|teleport|velocity|turn_to|snap_to|damage|switch|swap|input|hold|gui_drop|gui_switch|gui_swap|gui_quickmove|def|desc)\b/,
        "keyword",
      ],

      // module names
      [
        /\b([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)\b/,
        { cases: { "@keywords": "string", "@default": "string" } },
      ],

      // arguments starting with # or :
      [/(:\w+|#\w+(-\w+)*)/, "string2"],

      // identifiers
      [
        /[a-zA-Z_]\w*/,
        { cases: { "@keywords": "keyword", "@default": "identifier" } },
      ],

      // numbers
      [/\b\d+(_+\d+)*\b/, "number"],

      // delimiters and operators
      [/[{}()\[\]]/, "@brackets"],
      [/@symbols/, { cases: { "@operators": "delimiter", "@default": "" } }],

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
    // lineComment: "//",
  },
  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"],
  ],
};

// This defines the color theme of the editor.
export const theme = {
  base: "vs-dark",
  inherit: true,
  rules: [
    // Comments
    { token: "comment.text", foreground: "6A9955" }, // Light green for comments
    { token: "comment.author", foreground: "FFD700" }, // Gold for author comments, including the @ symbol

    // Keywords and commands
    { token: "keyword", foreground: "C586C0" }, // Light purple for commands

    // Identifiers
    { token: "identifier", foreground: "9CDCFE" }, // Light blue for identifiers

    // Delimiters and operators
    { token: "delimiter", foreground: "D4D4D4" }, // Light grey for delimiters

    // Strings
    { token: "string", foreground: "4EC9B0" }, // Green for regular strings
    { token: "string.escape", foreground: "4EC9B0" }, // Same as strings
    { token: "string2", foreground: "569CD6" }, // Dark blue for strings starting with # or :

    // Numbers
    { token: "number", foreground: "B5CEA8" }, // Light greenish color for numbers

    // Brackets
    { token: "brackets", foreground: "D4D4D4" }, // Light grey for brackets
  ],
  colors: {},
};
