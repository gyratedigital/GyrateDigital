import Image from "next/image"

export default function AboutBanner() {
  return (
    <section className="relative overflow-hidden pt-16 pb-0">
      <div className="container mx-auto flex md:items-center items-start md:flex-row flex-col jusify-between gap-12 px-4 pt-16">
        
        {/* Left Content */}
        <div className="space-y-6 sm:pb-12 pb-0">
            Who we are

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
        <Image
          src="/about_banner_img.webp"
          alt="Team celebrating"
          width={312}
          height={322}
          className="object-cover"
          priority
        />
      </div>
    </section>
  )
}
