import { getCategoriesList } from "@lib/data/categories"
import { getCollectionsList } from "@lib/data/collections"
import { cn } from "@lib/util/cn"
import { Container } from "@modules/common/components/container"
import Divider from "@modules/common/components/divider"
import { Heading } from "@modules/common/components/heading"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { NavigationItem } from "@modules/common/components/navigation-item"
import { Text } from "@modules/common/components/text"
import { Box } from "@modules/common/components/box"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@modules/common/components/accordion"
import { ChevronDownIcon } from "@modules/common/icons/chevron-down"

interface Category {
  id: string
  name: string
  handle: string
  parent_category?: any
  category_children?: Array<{
    id: string
    name: string
    handle: string
  }>
}

interface Collection {
  id: string
  title: string
  handle: string
}

export default async function Footer({ countryCode }: { countryCode: string }) {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <Container
      as="footer"
      className="mx-0 max-w-full border-t border-basic-primary bg-static px-0 py-0 small:px-0 small:py-0"
    >
      <Container className="flex flex-col gap-6 text-static small:gap-12">
        <Box className="flex flex-col gap-8 small:gap-12 large:flex-row xl:gap-0">
          <Box className="flex flex-col justify-between xl:min-w-[437px]">
            <LocalizedClientLink
              href={`/${countryCode}`}
              className="w-max cursor-pointer text-static"
            >
              <Heading className="text-2xl font-bold text-basic-primary">
                FROSTLORD
              </Heading>
            </LocalizedClientLink>
            <Box className="hidden large:flex">
              <Text size="md" className="text-secondary">
                Premium products for discerning customers
              </Text>
            </Box>
          </Box>
          
          <Box className="hidden shrink grow gap-5 small:flex xl:gap-0" data-testid="footer-links-section">
            {product_categories && product_categories?.length > 0 && (
              <Box className="flex-1 flex-col gap-3 small:flex">
                <Heading className="mb-2 text-lg" as="h3">
                  Categories
                </Heading>
                <Box className="grid grid-cols-1 gap-2">
                  {product_categories?.slice(0, 6).map((c: Category) => {
                    if (c.parent_category) {
                      return null
                    }

                    const children =
                      c.category_children?.map((child: { name: string; handle: string; id: string }) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <Box key={c.id} className="flex flex-col gap-2">
                        <NavigationItem
                          href={`/${countryCode}/categories/${c.handle}`}
                          variant="secondary"
                          className="w-max hover:text-static"
                          data-testid="category-link"
                        >
                          {c.name}
                        </NavigationItem>
                        {children && (
                          <Box className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <NavigationItem
                                  key={child.id}
                                  href={`/${countryCode}/categories/${child.handle}`}
                                  variant="secondary"
                                  className="hover:text-static"
                                  data-testid="category-link"
                                >
                                  {child.name}
                                </NavigationItem>
                              ))}
                          </Box>
                        )}
                      </Box>
                    )
                  })}
                </Box>
              </Box>
            )}
            
            {collections && collections.length > 0 && (
              <Box className="flex-1 flex-col gap-3 small:flex">
                <Heading className="mb-2 text-lg" as="h3">
                  Collections
                </Heading>
                <Box className="grid grid-cols-1 gap-2">
                  {collections?.slice(0, 6).map((c: Collection) => (
                    <NavigationItem
                      key={c.id}
                      href={`/${countryCode}/collections/${c.handle}`}
                      variant="secondary"
                      className="hover:text-static"
                    >
                      {c.title}
                    </NavigationItem>
                  ))}
                </Box>
              </Box>
            )}
            
            <Box className="flex-1 flex-col gap-3 small:flex">
              <Heading className="mb-2 text-lg" as="h3">
                Company
              </Heading>
              <Box className="grid grid-cols-1 gap-2">
                <NavigationItem
                  href={`/${countryCode}/about`}
                  variant="secondary"
                  className="hover:text-static"
                >
                  About Us
                </NavigationItem>
                <NavigationItem
                  href={`/${countryCode}/contact`}
                  variant="secondary"
                  className="hover:text-static"
                >
                  Contact
                </NavigationItem>
                <NavigationItem
                  href={`/${countryCode}/support`}
                  variant="secondary"
                  className="hover:text-static"
                >
                  Support
                </NavigationItem>
              </Box>
            </Box>
          </Box>
          
          <Accordion
            type="single"
            collapsible
            className="flex w-full flex-col gap-6 small:hidden"
          >
            {product_categories && product_categories?.length > 0 && (
              <AccordionItem value="categories" className="border-none">
                <AccordionTrigger
                  className="transition-all [&[data-state=open]>#chevronDownSvg]:rotate-180"
                  data-testid="categories-dropdown"
                >
                  <Heading
                    className="text-md font-medium text-static small:text-lg"
                    as="h3"
                  >
                    Categories
                  </Heading>
                  <div
                    id="chevronDownSvg"
                    className="flex h-12 w-12 shrink-0 items-center justify-center text-static duration-200 ease-in-out"
                  >
                    <ChevronDownIcon />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-3">
                  {product_categories?.slice(0, 6).map((c: Category) => {
                    if (c.parent_category) return null
                    return (
                      <NavigationItem
                        key={c.id}
                        href={`/${countryCode}/categories/${c.handle}`}
                        variant="secondary"
                        className="hover:text-static"
                        data-testid={`${c.name}-link`}
                      >
                        {c.name}
                      </NavigationItem>
                    )
                  })}
                </AccordionContent>
              </AccordionItem>
            )}
            
            {collections && collections.length > 0 && (
              <AccordionItem value="collections" className="border-none">
                <AccordionTrigger
                  className="transition-all [&[data-state=open]>#chevronDownSvg]:rotate-180"
                  data-testid="collections-dropdown"
                >
                  <Heading
                    className="text-md font-medium text-static small:text-lg"
                    as="h3"
                  >
                    Collections
                  </Heading>
                  <div
                    id="chevronDownSvg"
                    className="flex h-12 w-12 shrink-0 items-center justify-center text-static duration-200 ease-in-out"
                  >
                    <ChevronDownIcon />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-3">
                  {collections?.slice(0, 6).map((c: Collection) => (
                    <NavigationItem
                      key={c.id}
                      href={`/${countryCode}/collections/${c.handle}`}
                      variant="secondary"
                      className="hover:text-static"
                      data-testid={`${c.title}-link`}
                    >
                      {c.title}
                    </NavigationItem>
                  ))}
                </AccordionContent>
              </AccordionItem>
            )}
            
            <AccordionItem value="company" className="border-none">
              <AccordionTrigger
                className="transition-all [&[data-state=open]>#chevronDownSvg]:rotate-180"
                data-testid="company-dropdown"
              >
                <Heading
                  className="text-md font-medium text-static small:text-lg"
                  as="h3"
                >
                  Company
                </Heading>
                <div
                  id="chevronDownSvg"
                  className="flex h-12 w-12 shrink-0 items-center justify-center text-static duration-200 ease-in-out"
                >
                  <ChevronDownIcon />
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-3">
                <NavigationItem
                  href={`/${countryCode}/about`}
                  variant="secondary"
                  className="hover:text-static"
                >
                  About Us
                </NavigationItem>
                <NavigationItem
                  href={`/${countryCode}/contact`}
                  variant="secondary"
                  className="hover:text-static"
                >
                  Contact
                </NavigationItem>
                <NavigationItem
                  href={`/${countryCode}/support`}
                  variant="secondary"
                  className="hover:text-static"
                >
                  Support
                </NavigationItem>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Box>
        
        <Divider alignment="horizontal" variant="secondary" />
        
        <Box className="flex flex-wrap gap-6 gap-y-1">
          <Text size="md" className="shrink-0 text-secondary">
            © {new Date().getFullYear()} FROSTLORD. All rights reserved.
          </Text>
          <Box className="flex gap-6">
            <NavigationItem
              href={`/${countryCode}/privacy`}
              variant="secondary"
              className="shrink-0 hover:text-static"
            >
              Privacy Policy
            </NavigationItem>
            <NavigationItem
              href={`/${countryCode}/terms`}
              variant="secondary"
              className="shrink-0 hover:text-static"
            >
              Terms of Service
            </NavigationItem>
          </Box>
        </Box>
      </Container>
    </Container>
  )
}
