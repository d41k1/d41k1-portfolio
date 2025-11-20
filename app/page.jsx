import Link from "next/link";
import Image from "next/image";
import { VscVscode } from "react-icons/vsc";
import {
  SiCplusplus,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import { TbExternalLink } from "react-icons/tb";
import { RiGitRepositoryLine } from "react-icons/ri";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipList,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import {
  FaJs,
  FaReact,
  FaFigma,
  FaPython,
  FaDocker,
  FaGithub,
  FaXTwitter,
  FaGolang,
} from "react-icons/fa6";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const profiles = [
  {
    from: "2025.04",
    until: "現在",
    affiliation: "株式会社Affectify エンジニア アルバイト",
    url: "https://affectify.jp/",
  },
  {
    from: "2025.04",
    until: "現在",
    affiliation:
      "大阪公立大学大学院 情報学研究科 基幹情報学専攻 知能情報学分野",
    url: "https://www.omu.ac.jp/i/",
  },
  {
    from: "2023.09",
    until: "現在",
    affiliation: "知能メディア処理研究グループ",
    url: "https://imlab.jp/",
  },
  {
    from: "2021.04",
    until: "2025.03",
    affiliation: "大阪府立大学 工学域 電気電子系学類 情報工学課程",
    url: "https://www.omu.ac.jp/eng/undergraduate/inf-sci/",
  },
];

const skills = {
  skillList: [
    {
      icon: <FaPython />,
      name: "Python",
      explanation: "研究やkaggleでよく使います。",
    },
    {
      icon: <SiCplusplus />,
      name: "C++",
      explanation: "競技プログラミングでよく使います。",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
      explanation: " TypeScriptも勉強中です。",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
      explanation: "最近はTypeScriptを使っています。",
    },
    {
      icon: <FaGolang />,
      name: "Go",
      explanation: "開発系のアルバイトでGoを使っています。",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
      explanation: "デザインするためによく使います。",
    },
    {
      icon: <FaReact />,
      name: "React",
      explanation: "まだまだ勉強中です。",
    },

    {
      icon: <SiNextdotjs />,
      name: "Next.js",
      explanation: "まだまだ勉強中です。",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
      explanation: "環境構築するためによく使います。",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
      explanation: "普段からよく使うデザインツールです。",
    },

    {
      icon: <VscVscode />,
      name: "VScode",
      explanation: "普段からよく使うエディタです。",
    },
  ],
};

const socials = [
  {
    icon: <FaGithub size="28px" />,
    name: "GitHub",
    path: "https://github.com/d41k1",
  },
  {
    icon: <FaXTwitter size="28px" />,
    name: "X",
    path: "https://x.com/d41k1_main",
  },
];

const works = {
  info: [
    {
      icon: <TbExternalLink size="16px" />,
      path: "https://d41k1-portfolio.vercel.app/",
      description: "外部サイトに移動します。",
    },
    {
      icon: <RiGitRepositoryLine size="16px" />,
      path: "https://github.com/d41k1/d41k1-portfolio",
      description: "GitHubのリポジトリに移動します。",
    },
  ],
  notara: [
    {
      icon: <TbExternalLink size="16px" />,
      path: "https://notara-dev.vercel.app/",
      description: "外部サイトに移動します。",
    },
    {
      icon: <RiGitRepositoryLine size="16px" />,
      path: "https://github.com/d41k1/Notara",
      description: "GitHubのリポジトリに移動します。",
    },
  ],
  musicode: [
    {
      icon: <TbExternalLink size="16px" />,
      path: "https://musicode.vercel.app/",
      description: "外部サイトに移動します。",
    },
    {
      icon: <RiGitRepositoryLine size="16px" />,
      path: "https://github.com/d41k1/MusiCode",
      description: "GitHubのリポジトリに移動します。",
    },
  ],
};

const page = () => {
  return (
    <div className="h-full py-12">
      <div className="container mx-auto h-full px-4">
        <div className="grid grid-rows-1 gap-12">
          <section id="profile">
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex justify-content-start">
                    <div className="aspect-square bg-accent w-2 h-6"></div>
                    <div className="aspect-square opacity-0 bg-black w-3 h-6"></div>
                    <div>Profile</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-start">
                  <div className="grid gird-cols-1 md:grid-cols-2 md:max-w-screen-md gap-12 md:gap-6 justify-items-center">
                    <div className="w-full h-full grid justify-items-center">
                      <div className="flex items-center">
                        <Image
                          src="/assets/icon.png"
                          height="240"
                          width="240"
                          alt="icon"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 content-around">
                      <div className="font-bold text-3xl text-secondary">
                        d41k1<span className="text-accent">.</span>
                      </div>
                      <div className="font-sans text-base">
                        はじめまして。d41k1と申します。 <br />
                        情報工学を学ぶ大学生です。 <br />
                        新しいことにどんどん挑戦したいです。
                      </div>
                      <div className="font-sans font-medium text-base">
                        <div>所属</div>
                        <Table>
                          <TableBody className="font-sans font-normal text-base text-left">
                            {profiles.map((profile, index) => (
                              <TableRow key={index}>
                                <TableCell colSpan={3}>
                                  <div className="flex justify-start gap-4">
                                    <span>{profile.from}</span>
                                    <span>-</span>
                                    <span>{profile.until}</span>
                                  </div>
                                  <div className="hover:text-accent transition-all duration-100 mt-1 md:mt-0">
                                    <Link href={profile.url}>
                                      {profile.affiliation}
                                    </Link>
                                  </div>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          <section id="skills">
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex justify-content-start">
                    <div className="flex items-center">
                      <div className="aspect-square bg-accent w-2 h-6"></div>
                      <div className="aspect-square opacity-0 bg-black w-3 h-6"></div>
                      <div>Skills</div>
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gird-cols-1 gap-12">
                  <div className="font-sans">
                    まだまだ知識も技術力も未熟で勉強中です。 <br />
                    さまざまな経験を積んでもっと身につけていきたいです。
                  </div>
                  <ul className="grid gird-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[32px] gap-4">
                    {skills.skillList.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={120}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[168px] flex justify-center items-center group">
                              <div className="group-hover:text-accent transition-all duration-300 text-secondary">
                                <div className="text-6xl flex justify-center">
                                  {skill.icon}
                                </div>
                                <div className="my-4">{skill.name}</div>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.explanation}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
          <section id="works">
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex justify-content-start">
                    <div className="flex items-center">
                      <div className="aspect-square bg-accent w-2 h-6"></div>
                      <div className="aspect-square opacity-0 bg-black w-3 h-6"></div>
                      <div>Works</div>
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="font-sans">
                  自分が作った作品を公開しています。
                  <br />
                  少しずつ作品を増やしていきます。
                  <div className="flex justify-start mt-12 md:mx-16">
                    <div className="grid gird-cols-1 md:grid-cols-2 md:max-w-screen-md gap-4 md:gap-16 justify-items-start">
                      <div className="grid grid-cols-1 gap-1 md;gap-4 content-center md:content-start">
                        <div className="text-accent font-semibold text-lg">
                          ポートフォリオサイト
                        </div>
                        <div className="font-normal text-base">
                          <div>
                            現在ご覧になっているこのサイトです。
                            <br />
                            自分自身のポートフォリオサイトです。
                          </div>
                        </div>
                        <div className="border-t mt-2" />
                        <div className="flex md:gap-12 gap-8 justify-start mt-2">
                          {works.info.map((item, index) => (
                            <TooltipProvider key={index} delayDuration={120}>
                              <Tooltip>
                                <TooltipTrigger className="flex justify-center items-center group">
                                  <div className="group-hover:text-accent transition-all duration-300 text-secondary">
                                    <Link
                                      key={index}
                                      href={item.path}
                                      className="w-6 h-6 border border-primary rounded-full flex justify-center items-center text-primary text-base hover:text-white hover:bg-accent hover:border-accent hover:transition-all duration-500"
                                    >
                                      {item.icon}
                                    </Link>
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{item.description}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          ))}
                        </div>
                      </div>
                      <div className="w-full h-full grid justify-items-start">
                        <div className="flex items-center md:items-start">
                          <Image
                            src="/assets/d41k1-portfolio.png"
                            height="240"
                            width="426"
                            alt="ポートフォリオサイト"
                            className="rounded"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start mt-12 md:mx-16">
                    <div className="grid gird-cols-1 md:grid-cols-2 md:max-w-screen-md gap-4 md:gap-16 justify-items-start">
                      <div className="grid grid-cols-1 gap-1 md;gap-4 content-center md:content-start">
                        <div className="text-accent font-semibold text-lg">
                          Notara
                        </div>
                        <div className="font-normal text-base">
                          <div>
                            シンプルで効率的なタスク管理アプリです。
                            <br />
                            ぜひ使ってみてください。
                          </div>
                        </div>
                        <div className="border-t mt-2" />
                        <div className="flex md:gap-12 gap-8 justify-start mt-2">
                          {works.notara.map((item, index) => (
                            <TooltipProvider key={index} delayDuration={120}>
                              <Tooltip>
                                <TooltipTrigger className="flex justify-center items-center group">
                                  <div className="group-hover:text-accent transition-all duration-300 text-secondary">
                                    <Link
                                      key={index}
                                      href={item.path}
                                      className="w-6 h-6 border border-primary rounded-full flex justify-center items-center text-primary text-base hover:text-white hover:bg-accent hover:border-accent hover:transition-all duration-500"
                                    >
                                      {item.icon}
                                    </Link>
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{item.description}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          ))}
                        </div>
                      </div>
                      <div className="w-full h-full grid justify-items-start">
                        <div className="flex items-center md:items-start">
                          <Image
                            src="/assets/Notara.png"
                            height="240"
                            width="426"
                            alt="Notara"
                            className="rounded"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start mt-12 md:mx-16">
                    <div className="grid gird-cols-1 md:grid-cols-2 md:max-w-screen-md gap-4 md:gap-16 justify-items-start">
                      <div className="grid grid-cols-1 gap-1 md;gap-4 content-center md:content-start">
                        <div className="text-accent font-semibold text-lg">
                          MusiCode
                        </div>
                        <div className="font-normal text-base">
                          <div>
                            ABC表記で音楽を作成・共有できるアプリです。
                            <br />
                            作曲に興味がある方はぜひ使ってみてください。
                          </div>
                        </div>
                        <div className="border-t mt-2" />
                        <div className="flex md:gap-12 gap-8 justify-start mt-2">
                          {works.musicode.map((item, index) => (
                            <TooltipProvider key={index} delayDuration={120}>
                              <Tooltip>
                                <TooltipTrigger className="flex justify-center items-center group">
                                  <div className="group-hover:text-accent transition-all duration-300 text-secondary">
                                    <Link
                                      key={index}
                                      href={item.path}
                                      className="w-6 h-6 border border-primary rounded-full flex justify-center items-center text-primary text-base hover:text-white hover:bg-accent hover:border-accent hover:transition-all duration-500"
                                    >
                                      {item.icon}
                                    </Link>
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{item.description}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          ))}
                        </div>
                      </div>
                      <div className="w-full h-full grid justify-items-start">
                        <div className="flex items-center md:items-start">
                          <Image
                            src="/assets/MusiCode.png"
                            height="240"
                            width="426"
                            alt="MusiCode"
                            className="rounded"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          <section id="contact">
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex justify-content-start">
                    <div className="flex items-center">
                      <div className="aspect-square bg-accent w-2 h-6"></div>
                      <div className="aspect-square opacity-0 bg-black w-3 h-8"></div>
                      <div>Contact</div>
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex gap-16 justify-center md:gap-24 md:justify-center">
                {socials.map((item, index) => (
                  <Link
                    key={index}
                    href={item.path}
                    className="w-12 h-12 border border-secondary rounded-full flex justify-center items-center bg-secondary text-white text-base hover:text-white hover:bg-accent hover:border-accent hover:transition-all duration-500"
                  >
                    {item.icon}
                  </Link>
                ))}
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;
