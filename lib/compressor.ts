const info =
  "\n\nThe error has also logged into the console.\n\nIf this issue happens often, reach out to the support team on our discord.\nhttps://discord.gg/zg3ge9VTgr";

export class Compressor {
  compress(scr: string): string {
    try {
      const lines = scr.split("\n");
      let result = "";

      for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim().replace(/\s+/gi, " ");
        result += line;

        if (line.length > 0) {
          if (!line.endsWith("{") && !line.endsWith("}") && !line.endsWith(";")) {
            result += ";";
          }
          result += " ";
        }
      }

      return result;
    } catch (err: any) {
      return `Error while compressing:\n${err.message}${info}`;
    }
  }

  decompress(scr: string): string {
    try{
      scr = this.compress(scr);
    let lines = scr.split(";");
    let result = "";

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      result += line + "\n";
    }

    let temp = result;
    let spaced = false;
    result = "";

    for (let i = 0; i < temp.length; i++) {
      const c = temp[i];

      if (c === "{") {
        result += c + "\n";
        spaced = true;
      } else if (c === "}") {
        result += c + "\n";
        spaced = true;
      } else if (c === " ") {
        if (!spaced) {
          result += c;
          spaced = true;
        }
      } else {
        result += c;
        spaced = false;
      }
    }

    let opens = 0;
    temp = result;
    result = "";
    lines = temp.split("\n");

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.endsWith("{")) {
        opens++;
      } else if (line.startsWith("}") || line.endsWith("}")) {
        opens--;
      }

      const bl = line.endsWith("{");
      result +=
        (bl && opens === 1 ? "\n" : "") +
        " ".repeat((bl ? opens - 1 : opens) * 3) +
        line +
        "\n";
    }

    return result;
    } catch (err: any) {
      return `Error while decompressing:\n${err.message}${info}`;
    }
  }
}
