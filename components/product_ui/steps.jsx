import {
  Truck,
  Container,
  PackageSearch,
  ArrowRight,
} from "lucide-react"
import Stylish_H2 from "My_UI/stylish_h2"

const steps = [
  {
    id: 1,
    title: "Select Products",
    desc: "Choose one or multiple products",
    icon: PackageSearch ,
  },
  {
    id: 2,
    title: "Fill the Container",
    desc: "Products are packed into a container",
    icon: Container ,
  },
  {
    id: 3,
    title: "Get It Shipped",
    desc: "Container ships safely to you",
    icon: Truck,
  },
]

export default function HowShippingWorks() {
  return (
    <section className="w-full py-32 my-14 bg-primary">
      <div className="mx-auto max-w-5xl px-4">
        <Stylish_H2 h2={"How Shipping Works"} className="mb-2 text-center text-lg uppercase tracking-wider font-semibold"/>

        <p className="mb-14 mt-2 text-sm text-muted-foreground">
          Simple, transparent, and optimized for safe delivery
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <div
                key={step.id}
                className="relative flex flex-col items-center rounded-xl first-of-type:bg-black first-of-type:text-white bg-accent1 px-5 py-10 text-center shadow-lg "
              >
                {/* Icon */}
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-black text-white">
                  <Icon className=" h-auto w-2/3 stroke-1"/>
                </div>

                {/* Text */}
                <h4 className="text-sm font-semibold">
                 <span className="font-extrabold tracking-wider">0{index+1}  — </span>{step.title}
                </h4>
                <p className="mt-1 text-xs text-muted-foreground">
                  {step.desc}
                </p>

                {/* Arrow (desktop only) */}
                {index !== steps.length - 1 && (
                  <ArrowRight
                    size={18}
                    className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-gray-300 md:block"
                  />
                )}
              </div>
            )
          })}
        </div>

        {/* Confidence footer */}
        <div className="mt-6 rounded-xl text-black px-4 py-3 text-center text-xs">
          You stay in control — containers update automatically as you add or remove products.
        </div>
      </div>
    </section>
  )
}
