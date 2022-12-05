const createNode = (): interface节点 => {
  return { text: "", link: "", children: [] };
};

const fn根据嵌套数组找出最后的节点 = (s: string[], o: interface节点) => {
  if (s.length == 0) {
    return o;
  }

  let obj节点指针: interface节点 = o;
  for (let index = 0; index < s.length; index++) {
    const element = s[index];

    const i = obj节点指针.children.findIndex((d) => d.text == element);
    if (i > -1) {
      obj节点指针 = obj节点指针.children[i];
    } else {
      return undefined;
    }
  }
  return obj节点指针;
};

export const parseSideBar = (pathTree: string[]) => {
  const res = createNode();

  for (let index = 0; index < pathTree.length; index++) {
    const str当前路径 = pathTree[index];
    if (str当前路径 == "/README.md") {
      continue;
    }
    const arr嵌套数组 = str当前路径.split("/").slice(1);
    const arr上层嵌套数组 = arr嵌套数组.slice(0, -1);
    const str当前嵌套 = arr嵌套数组[arr嵌套数组.length - 1];
    const obj = fn根据嵌套数组找出最后的节点(arr上层嵌套数组, res);
    if (obj) {
      if (str当前路径.endsWith(".md")) {
        obj.children.push(str当前路径);
      } else {
        const nn = createNode();
        nn.text = str当前嵌套;
        // nn.link = str当前路径 + "/";
        nn.link = undefined;
        obj.children.push(nn);
      }
    }
  }

  return res;
};

interface interface节点 {
  text: string;
  link?: string;
  children: any[];
}
