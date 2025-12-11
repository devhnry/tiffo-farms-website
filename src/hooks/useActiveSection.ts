import { useEffect, useState } from "react";
import type { RefObject } from "react";

interface UseActiveSectionProps {
  sectionRefs: RefObject<HTMLElement | null>[];
  offset?: number;
}

export const useActiveSection = ({
  sectionRefs,
  offset = 80,
}: UseActiveSectionProps) => {
  const [activeSection, setActiveSection] = useState<number>(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const observerOptions = {
      root: null,
      rootMargin: `-${offset}px 0px -60% 0px`,
      threshold: 0,
    };

    const observerCallback =
      (index: number) => (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(index);
          }
        });
      };

    sectionRefs.forEach((ref, index) => {
      if (ref.current) {
        const observer = new IntersectionObserver(
          observerCallback(index),
          observerOptions
        );
        observer.observe(ref.current);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionRefs, offset]);

  return activeSection;
};
