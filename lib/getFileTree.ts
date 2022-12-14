import { extname, resolve } from "path";
import { readdirSync, statSync } from "fs";

const str文档根目录 = resolve(__dirname, "../docs");

const getDir = (p: string) => {
  return readdirSync(p);
};

const isDir = (p: string) => {
  return statSync(p).isDirectory();
};

export const getFileTree = (p: string, prefix = "", res: string[]) => {
  let l = getDir(p);
  l = l.filter((d) => !d.startsWith("."));

  for (let index = 0; index < l.length; index++) {
    const element = l[index];

    const str相对前缀 = prefix + "/" + element;
    const str当前路径 = resolve(p, element);
    if (isDir(str当前路径)) {
      res.push(str相对前缀);
      getFileTree(str当前路径, str相对前缀, res);
    } else {
      if (extname(str当前路径) == ".md") {
        res.push(str相对前缀);
      } else {
        // ignore
      }
      //
    }
  }

  return res;
};

const main = () => {
  const res = getFileTree(str文档根目录, "", []);
  console.log(res);
};

// main();
