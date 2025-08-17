import { Suspense } from 'react'

import LocalizedClientLink from '@modules/common/components/localized-client-link'
import CartButton from '@modules/layout/components/cart-button'
import SideMenu from '@modules/layout/components/side-menu'
import { listRegions } from '@lib/data/regions'
import { StoreRegion } from '@medusajs/types'

interface NavContentProps {
  productCategories: any
  collections: any
  countryCode: string
  products: any
}

export default async function NavContent({
  productCategories,
  collections,
  countryCode,
  products,
}: NavContentProps) {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="flex items-center justify-between w-full h-16">
      <div className="flex-1 basis-0 h-full flex items-center">
        <div className="h-full">
          <SideMenu regions={regions} />
        </div>
      </div>

      <div className="flex items-center h-full">
        <LocalizedClientLink
          href={`/${countryCode}`}
          className="text-2xl font-bold hover:text-basic-primary/80 uppercase transition-colors"
          data-testid="nav-store-link"
        >
          FROSTLORD
        </LocalizedClientLink>
      </div>

      <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
        <div className="hidden small:flex items-center gap-x-6 h-full">
          {process.env.NEXT_PUBLIC_FEATURE_SEARCH_ENABLED && (
            <LocalizedClientLink
              className="hover:text-basic-primary/80 transition-colors"
              href={`/${countryCode}/search`}
              scroll={false}
              data-testid="nav-search-link"
            >
              Search
            </LocalizedClientLink>
          )}
          <LocalizedClientLink
            className="hover:text-basic-primary/80 transition-colors"
            href={`/${countryCode}/account`}
            data-testid="nav-account-link"
          >
            Account
          </LocalizedClientLink>
        </div>
        <Suspense
          fallback={
            <LocalizedClientLink
              className="hover:text-basic-primary/80 flex gap-2 transition-colors"
              href={`/${countryCode}/cart`}
              data-testid="nav-cart-link"
            >
              Cart (0)
            </LocalizedClientLink>
          }
        >
          <CartButton />
        </Suspense>
      </div>
    </div>
  )
}
