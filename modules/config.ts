import TwitterIcon from '@/public/icon-twitter.svg'
import DiscordIcon from '@/public/icon-discord.svg'
import InstagramIcon from '@/public/icon-instagram.svg'

export const config = {
  env: process.env.NODE_ENV,
  app: {
    name: process.env.NEXT_PUBLIC_APP_NAME || 'Yubba World™️ Official Site - NFT Collectibles',
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  },
  mainPageLinks: [
    { name: 'The collection', href: '#the-collection' },
    { name: 'Collection preview', href: '/preview' },
    { name: 'Traits & Rarities', href: '#traits-rarity' },
    { name: 'Community', href: '#community' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Team', href: '#team' },
  ],
  otherPageLinks: [
    { name: 'The collection', href: '/#the-collection' },
    { name: 'Collection preview', href: '/preview' },
    { name: 'Traits & Rarities', href: '/#traits-rarity' },
    { name: 'Community', href: '/#community' },
    { name: 'Roadmap', href: '/#roadmap' },
    { name: 'Team', href: '/#team' },
  ],
  socials: [
//     { name: 'Twitter', icon: TwitterIcon, link: "https://twitter.com/yubbaworld" },
    { name: 'Instagram', icon: InstagramIcon, link: "https://www.instagram.com/yubbaworld/" },
    { name: 'Discord', icon: DiscordIcon, link: "https://discord.com/invite/yubbaworld" }
  ],
  founders: [
    {
      imageUrl: '/profile/profile-hicham.png',
      imageAlt: 'Hich Founder Yubba World',
      name: 'Hich',
      job: 'Creator / Tech Lead',
      email: '',
      twitter: '',
    }
  ],
  investors: [
    {
      imageUrl: '/profile/profile-manu.png',
      imageAlt: 'Manu Investor/Advisor Yubba World',
      name: 'The chancellor',
      badges: [
        '/badges/icon-coolcats-badge.png',
        '/badges/icon-deadfellaz-badge.png',
        '/badges/icon-bayc-badge.png',
      ]
    },
    {
      imageUrl: '/profile/profile-jeremy.png',
      imageAlt: 'Jeremy Investor/Advisor Yubba World',
      name: 'The astronaut',  
      badges: [
        '/badges/icon-deadfellaz-badge.png',
      ]    
    },
    {
      imageUrl: '/profile/profile-thomas.png',
      imageAlt: 'Thomas Investor/Advisor Yubba World',
      name: 'Laser King',  
      badges: [
        '/badges/icon-pudgypenguins-badge.png',
        '/badges/icon-coolcats-badge.png',
      ]    
    },
    {
      imageUrl: '/profile/profile-nate.png',
      imageAlt: 'Nate Investor/Advisor Yubba World',
      name: 'The racer',     
      badges: [
        '/badges/icon-pudgypenguins-badge.png',
        '/badges/icon-deadfellaz-badge.png',
      ] 
    },
    {
      imageUrl: '/profile/profile-tom.png',
      imageAlt: 'Tom Investor/Advisor Yubba World',
      name: 'The trooper',  
      badges: [
        '/badges/icon-coolcats-badge.png',
        '/badges/icon-toadbadge-badge.png',
      ]    
    },
      {
      imageUrl: '/profile/profile-max.png',
      imageAlt: 'Max Investor/Advisor Yubba World',
      name: 'The ranger',  
      badges: [
        '/badges/icon-pudgypenguins-badge.png',
        '/badges/icon-deadfellaz-badge.png',
      ]    
    },
  ],
  gallery: [
    { name: 'Yubba name', imageUrl: '/gallery/3-2.png' },
    { name: 'Yubba name', imageUrl: '/gallery/3.png' },
    { name: 'Yubba name', imageUrl: '/gallery/5.png' },
    { name: 'Yubba name', imageUrl: '/gallery/10.png' },
    { name: 'Yubba name', imageUrl: '/gallery/12.png' },
    { name: 'Yubba name', imageUrl: '/gallery/13.png' },
    { name: 'Yubba name', imageUrl: '/gallery/19.png' },
    { name: 'Yubba name', imageUrl: '/gallery/21.png' },
    { name: 'Yubba name', imageUrl: '/gallery/24.png' },
    { name: 'Yubba name', imageUrl: '/gallery/25.png' },
    { name: 'Yubba name', imageUrl: '/gallery/28.png' },
    { name: 'Yubba name', imageUrl: '/gallery/30.png' },
    { name: 'Yubba name', imageUrl: '/gallery/33.png' },
    { name: 'Yubba name', imageUrl: '/gallery/37.png' },
    { name: 'Yubba name', imageUrl: '/gallery/45.png' },
    { name: 'Yubba name', imageUrl: '/gallery/50.png' },
    { name: 'Yubba name', imageUrl: '/gallery/55.png' },
    { name: 'Yubba name', imageUrl: '/gallery/60.png' },
    { name: 'Yubba name', imageUrl: '/gallery/68.png' },
    { name: 'Yubba name', imageUrl: '/gallery/72.png' },
    { name: 'Yubba name', imageUrl: '/gallery/93.png' },
    { name: 'Yubba name', imageUrl: '/gallery/114.png' },
    { name: 'Yubba name', imageUrl: '/gallery/162.png' },
    { name: 'Yubba name', imageUrl: '/gallery/170.png' },
    { name: 'Yubba name', imageUrl: '/gallery/200.png' },
    { name: 'Yubba name', imageUrl: '/gallery/218.png' },
    { name: 'Yubba name', imageUrl: '/gallery/Yubba profile 3.png' },
    { name: 'Yubba name', imageUrl: '/gallery/Yubba profile 7.png' },
    { name: 'Yubba name', imageUrl: '/gallery/Yubba profile 8.png' },
    { name: 'Yubba name', imageUrl: '/gallery/Yubba profile 9.png' },
    { name: 'Yubba name', imageUrl: '/gallery/Yubba profile 20.png' },
    { name: 'Yubba name', imageUrl: '/gallery/Yubba profile 21.png' },
    { name: 'Yubba name', imageUrl: '/gallery/Yubba profile 27.png' },
    { name: 'Yubba name', imageUrl: '/gallery/Yubba profile 31.png' },
    { name: 'Yubba name', imageUrl: '/gallery/Yubba profile 32b.png' },
    { name: 'Yubba name', imageUrl: '/gallery/Yubba profile 36.png' },
    { name: 'Yubba name', imageUrl: '/gallery/Yubba profile 37.png' },
    { name: 'Yubba name', imageUrl: '/gallery/Yubba profile 39.png' },
    { name: 'Yubba name', imageUrl: '/gallery/Yubba profile 40.png' },
    { name: 'Yubba name', imageUrl: '/gallery/Yubba profile 45.png' },
  ]
}

export default config
