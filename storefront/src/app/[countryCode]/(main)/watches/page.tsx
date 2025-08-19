import { Metadata } from "next"
import { Suspense } from "react"

import WatchesTemplate from "@modules/store/templates/watches"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "ICED OUT WATCHES - FROSTLORD Luxury Timepieces",
  description:
    "Discover our exclusive collection of luxury iced out watches featuring the finest diamonds, premium materials, and unparalleled craftsmanship at FROSTLORD.",
}

export default async function WatchesPage({
  params: { countryCode },
  searchParams,
}: {
  params: { countryCode: string }
  searchParams: { sortBy?: string; page?: string }
}) {
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WatchesTemplate
        sortBy={searchParams.sortBy}
        page={searchParams.page}
        countryCode={countryCode}
      />
    </Suspense>
  )
}
