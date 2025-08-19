import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import PaginatedProducts from "./paginated-products"

const WatchesTemplate = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  return (
    <>
      {/* Frost Lord Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-frostlord-ice via-frostlord-diamond to-frostlord-frost -z-10">
        {/* Abstract geometric patterns for visual interest */}
        <div className="absolute top-0 left-0 w-48 h-48 small:w-96 small:h-96 bg-frostlord-platinum/20 rounded-full blur-2xl small:blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 small:w-80 small:h-80 bg-frostlord-sapphire/10 rounded-full blur-2xl small:blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 small:w-64 small:h-64 bg-frostlord-ice/30 rounded-full blur-xl small:blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div
        className="flex flex-col small:flex-row small:items-start py-6 content-container relative z-10"
        data-testid="watches-container"
      >
        <RefinementList sortBy={sort} />
        <div className="w-full">
          <div className="mb-8 text-2xl-semi">
            <h1 data-testid="watches-page-title" className="text-frostlord-midnight text-4xl small:text-5xl font-bold">
              ICED OUT WATCHES
            </h1>
            <p className="text-frostlord-midnight/70 text-lg small:text-xl mt-4 max-w-3xl">
              Discover our exclusive collection of luxury timepieces featuring the finest diamonds, 
              premium materials, and unparalleled craftsmanship. Each watch is a masterpiece of 
              sophistication and precision.
            </p>
          </div>
          <Suspense fallback={<SkeletonProductGrid />}>
            <PaginatedProducts
              sortBy={sort}
              page={pageNumber}
              countryCode={countryCode}
            />
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default WatchesTemplate
