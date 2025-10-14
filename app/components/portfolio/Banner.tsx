// app/components/Banner.tsx
import Image from "next/image"
// import { Badge } from "@/components/ui/badge"
// import { Card, CardContent } from "@/components/ui/card"

export default function PortfolioBanner() {
  return (
    <section className="relative overflow-hidden pt-16 pb-0">
      <div className="container mx-auto flex md:items-center items-start md:flex-row flex-col jusify-between gap-12 px-4 pt-10">
        
        {/* Left Content */}
        <div className="space-y-6">
          {/* <Badge variant="secondary" className="rounded-full px-4 py-1 text-sm"> */}
            Who we are
          {/* </Badge> */}

          <h1 className="text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Digital Marketing Agency
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed text-muted-foreground">
            We partner with ambitious brands to transform ideas into measurable 
            results. Through innovative design, data-driven marketing, and the 
            latest technology, we deliver strategies that connect with audiences 
            and accelerate success.
          </p>
        </div>

        {/* Right Image */}
        {/* <Card className="overflow-hidden rounded-2xl shadow-lg"> */}
          {/* <CardContent className="p-0"> */}
            <Image
              src="/portfolio-banner.svg" // <-- put your image in public folder
              alt="Team celebrating"
              width={312}
              height={322}
              className="object-cover"
              priority
            />
          {/* </CardContent> */}
        {/* </Card> */}
      </div>

      {/* Background Decoration */}
      {/* <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-green-200 opacity-20 blur-3xl"></div> */}
      {/* <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-green-300 opacity-20 blur-3xl"></div> */}
    </section>
  )
}
