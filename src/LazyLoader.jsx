import { useInView } from "react-intersection-observer";
import { Suspense } from "react";

export default function LazyLoader({ Component }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} style={{ width: "100%" }}>
      {inView ? (
        <Suspense fallback={<p>Loading...</p>}>
          <Component />
        </Suspense>
      ) : null}
    </section>
  );
}
