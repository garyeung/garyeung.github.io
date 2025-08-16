import type { ISite } from "./src/types/site"


const site: ISite = {
    title: "Gary Yeung",
    url: "placeholder",
    description: "A place for posting thought and code.",
    language: "en",
  routers: [
    { title: "posts", href: "/posts/" },
    { title: "showcase", href: '/showcase/' },
  ],
  contact: [
  {
    title: 'github', href: "github.com/garyeung"
    
  },
  {
    title: 'email', href: "yangzentao@hotmail.com"
  }

  ],

  credits: [
  {
    title: 'astro',   
    href: 'astro.build/'    
  },
  {
    title: 'Tailwind CSS',
    href: 'tailwindcss.com/'
  }
  ]
}

const post = {
  previewSize: 7,
  pageSize: 42 
}



export const config = {
    site,
    post,
}

