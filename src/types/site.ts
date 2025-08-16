
export interface ILink {
  title: string,
  href: string
}

export interface ISite {
    title: string,
    url: string,
    description: string,
    language: string,
    routers: ILink[],
    credits: ILink[],
    contact: ILink[]
}