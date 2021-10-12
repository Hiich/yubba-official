import styles from "./Roadmap.module.css";
import { ReactNode } from "react";
import { Button, Container, H1, H2 } from "@/components";
type Props = {
  children?: ReactNode;
  className?: string;
};

const Roadmap = ({ children = "Loading...", className = "" }: Props) => {
  return (
    <section id="#roadmap">
      <Container>
        <div className="pt-20 ">
          <div className="m-2">
            <div className=" mt-4 mb-5 text-3xl font-title uppercase tracking-[9px] text-secondary">
              ROADMAP
            </div>
            <div className="mt-8 text-secondary">
              This roadmap outlines our goals and where we want to take Yubba
              World. Our team is working on a lot of cool, interesting ideas
              that will make being a part of Yubba World a fun and rewarding
              experience. It may evolve over time and will hopefully become even
              more awesome!
            </div>
          </div>

          <div className="flow-root mt-10">
            <ul role="list" className="-mb-2">
            <li  className="mt-12">
                <div className="relative pb-3">
                  <span
                    className="absolute top-2 left-5 -ml-px h-full w-0.5 bg-pink-500"
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start space-x-3">
                    <div>
                      <div className="relative px-3 top-1">
                        <div className="flex items-center justify-center w-4 h-4 bg-pink-500 rounded-full ring-white"></div>
                      </div>
                    </div>
                    <div className="min-w-0  pb-1.5 ">
                      <div className="">
                        <div className={styles.Rectangle}>
                          <div className={styles.dateContenair}>Aug 2021</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative pb-3">
                  <span
                    className="absolute top-2 left-5 -ml-px h-full w-0.5 bg-pink-500"
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start space-x-3">
                    <div>
                      <div className="relative px-4 top-4">
                        <div className="flex items-center justify-center w-2 h-2 bg-white rounded-full ring-4 ring-pink-500"></div>
                      </div>
                    </div>
                    <div className="min-w-0  py-1.5 ">
                      <div className="">
                        <div>
                          <span className="font-title text-secondary">
                            Creation
                          </span>
                          <div className="mt-5 text-secondary">
                          Dreaming up an NFT project that is fun, unique and profitable for investors . Designing the Yubba details you will come to know and love, building a secure and reliable infrastructure for Yubba World.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative ">
                  <div className="relative flex items-start ">
                    <div>
                      <div className="relative top-0 px-2">
                        <div className="inline-block w-8 overflow-hidden">
                          <div className="w-3 h-3 ml-1 origin-top-left transform -rotate-45 bg-pink-500 "></div>
                        </div>
                      </div>
                    </div>

                    <div className="min-w-0 flex-1 py-1.5 ">
                      <div className={styles.Line}></div>
                    </div>
                  </div>
                </div>
              </li>
              <li  className="mt-12">
                <div className="relative pb-3">
                  <span
                    className="absolute top-2 left-5 -ml-px h-full w-0.5 bg-pink-500"
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start space-x-3">
                    <div>
                      <div className="relative px-3 top-1">
                        <div className="flex items-center justify-center w-4 h-4 bg-pink-500 rounded-full ring-white"></div>
                      </div>
                    </div>
                    <div className="min-w-0  pb-1.5 ">
                      <div className="">
                        <div className={styles.Rectangle}>
                          <div className={styles.dateContenair}>Sep 2021</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative pb-3">
                  <span
                    className="absolute top-2 left-5 -ml-px h-full w-0.5 bg-pink-500"
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start space-x-3">
                    <div>
                      <div className="relative px-4 top-4">
                        <div className="flex items-center justify-center w-2 h-2 bg-white rounded-full ring-4 ring-pink-500"></div>
                      </div>
                    </div>
                    <div className="min-w-0  py-1.5 ">
                      <div className="">
                        <div>
                          <span className="font-title text-secondary">
                            Community
                          </span>
                          <div className="mt-5 text-secondary">
                            Spreading the word through the grapevine
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative ">
                  <div className="relative flex items-start ">
                    <div>
                      <div className="relative top-0 px-2">
                        <div className="inline-block w-8 overflow-hidden">
                          <div className="w-3 h-3 ml-1 origin-top-left transform -rotate-45 bg-pink-500 "></div>
                        </div>
                      </div>
                    </div>

                    <div className="min-w-0 flex-1 py-1.5 ">
                      <div className={styles.Line}></div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="mt-12">
                <div className="relative pb-3">
                  <span
                    className="absolute top-2 left-5 -ml-px h-full w-0.5 bg-pink-500"
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start space-x-3">
                    <div>
                      <div className="relative px-3 top-1">
                        <div className="flex items-center justify-center w-4 h-4 bg-pink-500 rounded-full ring-white"></div>
                      </div>
                    </div>
                    <div className="min-w-0  pb-1.5">
                      <div className="grid grid-cols-2 ">
                        <div className={styles.Rectangle}>
                          <div className={styles.dateContenair}>Oct 2021</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative pb-3">
                  <span
                    className="absolute top-2 left-5 -ml-px h-full w-0.5 bg-pink-500"
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start space-x-3">
                    <div>
                      <div className="relative px-4 top-4">
                        <div className="flex items-center justify-center w-2 h-2 bg-white rounded-full ring-4 ring-pink-500"></div>
                      </div>
                    </div>
                    <div className="min-w-0  py-1.5 ">
                      <div className="">
                        <div>
                          <span className="font-title text-secondary">
                            Launch
                          </span>
                          <div className="mt-5 text-secondary">
                            Early Bird opportunity for investing in your own
                            Yubba!
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative pb-3">
                  <span
                    className="absolute top-2 left-5 -ml-px h-full w-0.5 bg-pink-500"
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start space-x-3">
                    <div>
                      <div className="relative px-4 top-4">
                        <div className="flex items-center justify-center w-2 h-2 bg-white rounded-full ring-4 ring-pink-500"></div>
                      </div>
                    </div>
                    <div className="min-w-0  py-1.5 ">
                      <div className="">
                        <div>
                          <span className="font-title text-secondary">
                            Pre-sale
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative pb-3">
                  <span
                    className="absolute top-2 left-5 -ml-px h-full w-0.5 bg-pink-500"
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start space-x-3">
                    <div>
                      <div className="relative px-4 top-3 ">
                        <div className="flex items-center justify-center w-2 h-2 bg-white rounded-full ring-4 ring-pink-500"></div>
                      </div>
                    </div>
                    <div className="min-w-0  py-1.5 ">
                      <div>
                        <span className="font-title text-secondary">
                          Public release I{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative pb-3">
                  <span
                    className="absolute top-2 left-5 -ml-px h-full w-0.5 bg-pink-500"
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start space-x-3">
                    <div>
                      <div className="relative px-4 top-3 ">
                        <div className="flex items-center justify-center w-2 h-2 bg-white rounded-full ring-4 ring-pink-500"></div>
                      </div>
                    </div>
                    <div className="min-w-0  py-1.5 ">
                      <div className="">
                        <div className="">
                          <span className="font-title text-secondary">
                            Public release II
                          </span>
                        </div>

                        <div className="grid items-start grid-cols-2 mt-5">
                          <div>
                            <div className={styles.LineIn}>
                              <div className="absolute  ml-12 -bottom-2 left-[-58px]  mt-5 mr-2 w-8 overflow-hidden inline-block">
                                <div className="w-3 h-3 origin-top-left transform -rotate-45 bg-pink-500 "></div>
                              </div>
                            </div>
                          </div>
                          <div className="-ml-8 font-bold text-pink-500">
                            Sales completion
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative ">
                  <div className="relative flex items-start ">
                    <div>
                      <div className="relative top-0 px-2">
                        <div className="inline-block w-8 overflow-hidden">
                          <div className="w-3 h-3 ml-1 origin-top-left transform -rotate-45 bg-pink-500 "></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative pb-3 pt-7">
                  <span
                    className="absolute  top-7 left-5 -ml-px h-3/4 w-0.5 bg-pink-500"
                    aria-hidden="true"
                  />
                  <div className="absolute md:top-0 top-2 left-5 rounded-full   h-[70px] w-[70px] md:h-20 md:w-20 flex items-center justify-center ring-pink-500 ring-1">
                    <span className="text-xl font-bold text-pink-500">20%</span>
                  </div>
                  <div className="relative flex items-start space-x-0">
                    <div>
                      <div className="relative px-4 top-2 ">
                        <div className="flex items-center justify-center w-2 h-2 bg-white rounded-full ring-4 ring-pink-500"></div>
                      </div>
                    </div>

                    <div className="min-w-0 top-0  py-1.5 pl-[60px] md:pl-20">
                      <div className="">
                        <div>
                          <span className="font-title text-secondary">
                            Rarity tools application
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative">
                  <div className="relative flex items-start ">
                    <div>
                      <div className="relative top-0 px-2 ">
                        <div className="inline-block w-8 overflow-hidden">
                          <div className="w-3 h-3 ml-1 origin-top-left transform -rotate-45 bg-pink-500 "></div>
                        </div>
                      </div>
                    </div>

                    <div className="min-w-0 flex-1 py-1.5 pl-[60px]  ">
                      <div className={styles.Line}></div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative pb-3 pt-7">
                  <span
                    className="absolute md:top-9 top-12 left-5 -ml-px h-3/4 w-0.5 bg-pink-500"
                    aria-hidden="true"
                  />
                  <div className="absolute md:top-0 top-2 left-5 rounded-full   h-[70px] w-[70px] md:h-20 md:w-20 flex items-center justify-center ring-pink-500 ring-1">
                    <span className="text-xl font-bold text-pink-500">50%</span>
                  </div>
                  <div className="relative flex items-start space-x-0">
                    <div>
                      <div className="relative px-4 top-2 ">
                        <div className="flex items-center justify-center w-2 h-2 bg-white rounded-full ring-4 ring-pink-500"></div>
                      </div>
                    </div>

                    <div className="min-w-0 top-0  py-1.5 pl-[60px] md:pl-20">
                      <div className="">
                        <div>
                          <span className="font-title text-secondary">
                            Merch production
                          </span>
                        </div>
                        <div className="w-full ">
                          We will be bringing you exclusive Yubba merch like no
                          other.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative">
                  <div className="relative flex items-start ">
                    <div>
                      <div className="relative top-0 px-2 ">
                        <div className="inline-block w-8 overflow-hidden">
                          <div className="w-3 h-3 ml-1 origin-top-left transform -rotate-45 bg-pink-500 "></div>
                        </div>
                      </div>
                    </div>

                    <div className="min-w-0 flex-1 py-1.5 pl-[60px]  ">
                      <div className={styles.Line}></div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="relative pb-3 pt-9">
                  <span
                    className="absolute  top-10 left-5 -ml-px h-3/4 w-0.5 bg-pink-500"
                    aria-hidden="true"
                  />
                  <div className="absolute md:top-2 top-4 left-5 rounded-full   h-[70px] w-[70px] md:h-20 md:w-20 flex items-center justify-center ring-pink-500 ring-1">
                    <span className="text-xl font-bold text-pink-500">
                      100%
                    </span>
                  </div>
                  <div className="relative flex items-start space-x-0 ">
                    <div className="z-10 ">
                      <div className="relative px-4 top-2 ">
                        <div className="flex items-center justify-center w-2 h-2 bg-white rounded-full ring-4 ring-pink-500"></div>
                      </div>
                    </div>

                    <div className="min-w-0  py-1.5  pl-[60px] md:pl-20 ">
                      <div>
                        <div>
                          <span className="font-title text-secondary">
                            Yubba Game
                          </span>
                        </div>
                        <div className="w-full mt-2 ">
                          Initiate Phase 1 of gamifying Yubba World.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative ">
                  <div className="relative flex items-start ">
                    <div>
                      <div className="relative top-0 px-2">
                        <div className="inline-block w-8 overflow-hidden">
                          <div className="w-3 h-3 ml-1 origin-top-left transform -rotate-45 bg-pink-500 "></div>
                        </div>
                      </div>
                    </div>

                    <div className="min-w-0 flex-1 py-1.5 pl-[60px]  ">
                      <div className={styles.Line}></div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="mt-12">
                <div className="relative pb-3">
                  <span
                    className="absolute top-2 left-5 -ml-px h-full w-0.5 bg-pink-500"
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start space-x-3">
                    <div>
                      <div className="relative px-3 top-1">
                        <div className="flex items-center justify-center w-4 h-4 bg-pink-500 rounded-full ring-white"></div>
                      </div>
                    </div>
                    <div className="min-w-0  pb-1.5 ">
                      <div className="">
                        <div className={styles.Rectangle}>
                          <div className={styles.dateContenair}>Q4 2021</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="relative pb-3 ">
                  <span
                    className="absolute top-2 left-5 -ml-px h-full w-0.5 bg-pink-500"
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start space-x-3">
                    <div>
                      <div className="relative px-4 top-2 ">
                        <div className="flex items-center justify-center w-2 h-2 bg-white rounded-full ring-4 ring-pink-500"></div>
                      </div>
                    </div>
                    <div className="min-w-0  py-1.5 mt-0">
                      <div className="">
                        <div>
                          <span className="font-title text-secondary">
                            Added utilities (extra capabilities, accessories,
                            weapons)
                          </span>
                        </div>
                        <span className="w-full ">
                          <br /> Boost your Yubba with added functionality for
                          the upcoming game. More details coming…
                          <br />{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 py-1.5 ml-10 mt-5">
                    <div className={styles.Line}></div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative pb-3">
                  <span
                    className="absolute top-2 left-5 -ml-px h-full w-0.5 bg-pink-500 "
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start space-x-3">
                    <div>
                      <div className="relative px-4 top-2 ">
                        <div className="flex items-center justify-center w-2 h-2 bg-white rounded-full ring-4 ring-pink-500"></div>
                      </div>
                    </div>
                    <div className="min-w-0  py-1.5 ">
                      <div className="">
                        <div>
                          <span className="font-title">
                            Gamification Phase 1: Yubba Arena{" "}
                          </span>
                          (Time to Yubba-off)
                        </div>
                        <span className="w-full ">
                          <br /> Implementation of the 1st phase of gamifying
                          Yubba World. More information will become available
                          about your Yubba’s capabilities and skills. Get ready
                          for Yubba Arena.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 py-1.5 ml-10 mt-5">
                    <div className={styles.Line}></div>
                  </div>
                </div>
              </li>

              <li>
                <div className="relative pb-3">
                  <span
                    className="absolute top-2 left-5 -ml-px h-full w-0.5 bg-pink-500 "
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start space-x-3">
                    <div>
                      <div className="relative px-4 top-2 ">
                        <div className="flex items-center justify-center w-2 h-2 bg-white rounded-full ring-4 ring-pink-500"></div>
                      </div>
                    </div>
                    <div className="min-w-0  py-1.5 ">
                      <div className="">
                        <div>
                          <span className="font-title text-secondary">
                            Christmas edition
                          </span>
                        </div>
                        <span className="w-full ">
                          {" "}
                          <br />
                          Limited release to the collection. Expect Yubba
                          festivities. Announcements on aquisitions will be made
                          available shortly before the drop.{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative ">
                  <div className="relative flex items-start ">
                    <div>
                      <div className="relative top-0 px-2">
                        <div className="inline-block w-8 overflow-hidden">
                          <div className="w-3 h-3 ml-1 origin-top-left transform -rotate-45 bg-pink-500 "></div>
                        </div>
                      </div>
                    </div>

                    <div className="min-w-0 flex-1 py-1.5 ">
                      <div className={styles.Line}></div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="mt-12">
                <div className="relative pb-3">
                  <span
                    className="absolute top-2 left-5 -ml-px h-full w-0.5 bg-pink-500"
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start space-x-3">
                    <div>
                      <div className="relative px-3 top-1">
                        <div className="flex items-center justify-center w-4 h-4 bg-pink-500 rounded-full ring-white"></div>
                      </div>
                    </div>
                    <div className="min-w-0  pb-1.5 ">
                      <div className="">
                        <div className={styles.Rectangle}>
                          <div className={styles.dateContenair}>Q1 2022</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="relative pb-3">
                  <span
                    className="absolute top-2 left-5 -ml-px h-full w-0.5 bg-pink-500"
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start space-x-3">
                    <div>
                      <div className="relative px-4 top-2 ">
                        <div className="flex items-center justify-center w-2 h-2 bg-white rounded-full ring-4 ring-pink-500"></div>
                      </div>
                    </div>
                    <div className="min-w-0  py-1.5 ">
                      <div className="">
                        <div>
                          <span className="font-title text-secondary">
                            Yubba in Japan{" "}
                          </span>
                          <div className="w-full ">
                            <br />
                            Tokyo exhibition has been penned in. We are working
                            on a very exciting collaboration deal with a well
                            known entity.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 py-1.5 ml-10 mt-3 ">
                    <div className={styles.Line}></div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative pb-3 ">
                  <span
                    className="absolute top-2 left-5 -ml-px h-full w-0.5 bg-pink-500"
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start space-x-3">
                    <div>
                      <div className="relative px-4 top-2 ">
                        <div className="flex items-center justify-center w-2 h-2 bg-white rounded-full ring-4 ring-pink-500"></div>
                      </div>
                    </div>
                    <div className="min-w-0  py-1.5 mt-0">
                      <div className="">
                        <div>
                          <span className="font-title text-secondary">
                            London exhibition
                          </span>
                        </div>
                        <span className="w-full ">
                          <br /> Yubbas will make a brief physical appearance in
                          the world of humans for the very first time.{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 py-1.5 ml-10 mt-5">
                    <div className={styles.Line}></div>
                  </div>
                </div>
              </li>

              <li>
                <div className="relative pb-3">
                  <span
                    className="absolute top-2 left-5 -ml-px h-full w-0.5 bg-pink-500 "
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start space-x-3">
                    <div>
                      <div className="relative px-4 top-2 ">
                        <div className="flex items-center justify-center w-2 h-2 bg-white rounded-full ring-4 ring-pink-500"></div>
                      </div>
                    </div>
                    <div className="min-w-0  py-1.5 ">
                      <div className="">
                        <div>
                          <span className="font-title text-secondary">
                            Yubba World - Phase 2
                          </span>
                        </div>
                        <span className="w-full ">
                          {" "}
                          <br />
                          The creation of Yubba World will commence.{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative ">
                  <div className="relative flex items-start ">
                    <div>
                      <div className="relative top-0 px-2">
                        <div className="inline-block w-8 overflow-hidden">
                          <div className="w-3 h-3 ml-1 origin-top-left transform -rotate-45 bg-pink-500 "></div>
                        </div>
                      </div>
                    </div>

                    <div className="min-w-0 flex-1 py-1.5 ">
                      <div className={styles.Line}></div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="mt-12">
                <div className="relative pb-3">
                  <span
                    className="absolute top-1 left-5 -ml-px h-full w-0.5 bg-pink-500"
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start space-x-3">
                    <div>
                      <div className="relative px-3 top-1">
                        <div className="flex items-center justify-center w-4 h-4 bg-pink-500 rounded-full ring-white"></div>
                      </div>
                    </div>
                    <div className="min-w-0  pb-1.5 ">
                      <div className="">
                        <div className={styles.Rectangle}>
                          <div className={styles.dateContenair}>Q2 2022</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative pb-3">
                  <span
                    className="absolute top-1 left-5 -ml-px h-full w-0.5 bg-pink-500"
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start space-x-3">
                    <div>
                      <div className="relative px-4 top-2 ">
                        <div className="flex items-center justify-center w-2 h-2 bg-white rounded-full ring-4 ring-pink-500"></div>
                      </div>
                    </div>
                    <div className="min-w-0  py-1.5 ">
                      <div className="">
                        <div>
                          <span className="font-title text-secondary">
                            Yubba World - the metaverse
                          </span>
                        </div>
                        <span className="w-full ">
                          {" "}
                          <br />
                          Meet and greet in the metaverse. How has your Yubba
                          evolved?{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 py-1.5 ml-10 ">
                    <div className={styles.Line}></div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative pb-3">
                  <span
                    className="absolute top-2 left-5 -ml-px h-full w-0.5 bg-pink-500"
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start space-x-3">
                    <div>
                      <div className="relative px-4 top-2 ">
                        <div className="flex items-center justify-center w-2 h-2 bg-white rounded-full ring-4 ring-pink-500"></div>
                      </div>
                    </div>
                    <div className="min-w-0  py-1.5 ">
                      <div className="">
                        <div>
                          <span className="font-title">Merch 2 drop</span>
                        </div>
                        <span className="w-full ">
                          <br />
                          Expect a whole new range of merch. Exclusive for Yubba
                          holders only.{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative ">
                  <div className="relative flex items-start ">
                    <div>
                      <div className="relative top-0 px-2 ">
                        <div className="inline-block w-8 overflow-hidden">
                          <div className="w-3 h-3 ml-1 origin-top-left transform -rotate-45 bg-pink-500 "></div>
                        </div>
                      </div>
                    </div>

                    <div className="min-w-0 flex-1 py-1.5 ">
                      <div className={styles.Line}></div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Roadmap;
