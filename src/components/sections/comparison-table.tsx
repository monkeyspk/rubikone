"use client";

import Link from "next/link";
import { COMPARISON_TABLE } from "@/lib/constants";
import { useContent } from "@/hooks/useContent";
import { StaggerContainer, StaggerItem } from "@/components/shared/fade-up";
import { SectionHeader } from "@/components/shared/section-header";
import { useEditPath } from "@/components/cms/primitives";

interface ComparisonFeature {
  label?: string;
}

function ComparisonFeatureCard({ feature, index }: { feature: ComparisonFeature; index: number }) {
  const path = `COMPARISON_TABLE.features[${index}]`;
  const itemEdit = useEditPath(path);
  const labelEdit = useEditPath(`${path}.label`);
  return (
    <StaggerItem>
      <div className="bg-white rounded-2xl p-6 shadow-apple h-full" {...itemEdit}>
        {feature.label && (
          <p className="text-body-lg font-normal text-[var(--color-apple-dark)]" {...labelEdit}>
            {feature.label}
          </p>
        )}
      </div>
    </StaggerItem>
  );
}

export function ComparisonSection() {
  const comparisonTable = useContent("COMPARISON_TABLE", COMPARISON_TABLE);
  const headlineEdit = useEditPath("COMPARISON_TABLE.headline");
  const subheadlineEdit = useEditPath("COMPARISON_TABLE.subheadline");
  return (
    <section className="section-spacing bg-[var(--color-apple-gray-100)]">
      <div className="container-content">
        <SectionHeader
          title={comparisonTable.headline}
          subtitle={comparisonTable.subheadline}
          align="center"
          titleProps={headlineEdit}
          subtitleProps={subheadlineEdit}
        />

        <StaggerContainer
          className="mt-12 lg:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          {...useEditPath("COMPARISON_TABLE.features")}
        >
          {comparisonTable.features.map((feature, index) => (
            <ComparisonFeatureCard key={index} feature={feature} index={index} />
          ))}
        </StaggerContainer>

        <div className="mt-12 flex justify-center">
          <Link href="/koeniz" className="btn-primary">
            Probiere es aus!
          </Link>
        </div>
      </div>
    </section>
  );
}
