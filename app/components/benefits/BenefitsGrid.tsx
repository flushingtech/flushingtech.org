
// components/BenefitsGrid.tsx
import { BENEFITS_DATA } from "./benefits-data";
import { cn } from "@/lib/utils"; // optional className merge helper

export const BenefitsGrid = () => {
  return (
    <section className="w-full py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold sm:text-4xl font-site_header">Why Flushing-Tech?</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          A community-first approach to learning, building, and connecting with others in tech.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {BENEFITS_DATA.map((benefit, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-border shadow-sm p-6 flex flex-col gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-peach/20 flex items-center justify-center">
              <benefit.icon className="w-5 h-5 text-peach" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
            <p className="text-sm text-muted-foreground">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
