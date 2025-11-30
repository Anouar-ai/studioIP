import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <Skeleton className="h-4 w-24 mx-auto mb-4" />
          <Skeleton className="h-10 w-4/5 mx-auto" />
        </header>

        <CardSkeleton />

        <div className="my-16 p-6 bg-card rounded-lg border">
          <Skeleton className="h-8 w-1/3 mb-6" />
          <div className="space-y-4">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-5/6" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-3/4" />
          </div>
        </div>

        <SectionSkeleton />
        <SectionSkeleton />
      </div>
    </div>
  );
}

function SectionSkeleton() {
    return (
        <section className="mb-16">
            <Skeleton className="h-9 w-2/3 mb-6" />
            <div className="space-y-4 text-lg">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-11/12" />
            </div>
        </section>
    )
}

function CardSkeleton() {
    return (
        <div className="mb-12 p-8 text-center rounded-lg border">
            <Skeleton className="h-12 w-12 rounded-full mx-auto mb-4" />
            <Skeleton className="h-8 w-1/2 mx-auto mb-2" />
            <Skeleton className="h-5 w-3/4 mx-auto mb-6" />
            <Skeleton className="h-12 w-64 mx-auto" />
        </div>
    )
}
