import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'CahuSwap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by CahuSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://Cahuswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('CahuSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('CahuSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('CahuSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('CahuSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('CahuSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('CahuSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('CahuSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('CahuSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('CahuSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('CahuSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('CahuSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('CahuSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('CahuSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('CahuSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('CahuSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('CahuSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('CahuSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('CahuSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('CahuSwap Info & Analytics')}`,
        description: 'View statistics for Cahuswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('CahuSwap Info & Analytics')}`,
        description: 'View statistics for Cahuswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('CahuSwap Info & Analytics')}`,
        description: 'View statistics for Cahuswap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('CahuSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('CahuSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('CahuSwap')}`,
      }
    default:
      return null
  }
}
