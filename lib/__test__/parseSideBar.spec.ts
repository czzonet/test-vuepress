import { parseSideBar } from "../parseSideBar";

describe("parseSideBar", () => {
  it("should", () => {
    const tree = [
      "/nest1",
      "/nest1/1-1.md",
      "/nest1/1-2.md",
      "/nest1/nest2",
      "/nest1/nest2/2-1.md",
    ];
    const sideBar = [
      {
        text: "nest1",
        link: "/nest1/",
        children: [
          "/nest1/1-1.md",
          "/nest1/1-2.md",
          {
            text: "nest2",
            link: "/nest1/nest2/",
            children: ["/nest1/nest2/2-1.md"],
          },
        ],
      },
    ];
    const obj预处理 = {
      link: "",
      text: "",
      children: [
        {
          link: "/nest1/",
          text: "nest1",
          children: [
            "/nest1/1-1.md",
            "/nest1/1-2.md",
            {
              link: "/nest1/nest2/",
              text: "nest2",
              children: ["/nest1/nest2/2-1.md"],
            },
          ],
        },
      ],
    };
    expect(parseSideBar(tree).children).toEqual(sideBar);
    0;
    0;
    0;
    0;
    0;
  });
  it("should", () => {
    const tree = [
      "/README.md",
      "/nest",
      "/nest/1.md",
      "/nest/nest2",
      "/nest/nest2/2-2.md",
      "/nest/中文.md",
    ];
    const sideBar = [
      {
        text: "nest",
        link: "/nest/",
        children: [
          "/nest/1.md",

          {
            text: "nest2",
            link: "/nest/nest2/",
            children: ["/nest/nest2/2-2.md"],
          },
          "/nest/中文.md",
        ],
      },
    ];
    console.log(parseSideBar(tree).children);

    expect(parseSideBar(tree).children).toEqual(sideBar);
    0;
    0;
  });
});
