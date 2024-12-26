export type NavbarItem = {
    id: number
    title: string
    href: string
}

export type SiteConfig = {
    name: string
    description: string
    url: string
    creator: string
    keywords: string[]
    authors: {
        name: string
        url: string
    }
    links: {
        github: string
    }

}

