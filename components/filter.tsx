import React, { useState, useRef, useEffect } from "react";
import { Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface CategoriesSectionProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftScroll, setShowLeftScroll] = useState<boolean>(false);
  const [showRightScroll, setShowRightScroll] = useState<boolean>(false);

  // Check scroll position and update button visibility
  const checkScrollButtons = (): void => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftScroll(scrollLeft > 0);
      setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  // Scroll left
  const scrollLeft = (): void => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  // Scroll right
  const scrollRight = (): void => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  // Initialize scroll buttons on mount
  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollButtons);
      window.addEventListener("resize", checkScrollButtons);
      return () => {
        container.removeEventListener("scroll", checkScrollButtons);
        window.removeEventListener("resize", checkScrollButtons);
      };
    }
  }, [categories]);

  return (
    <div className="flex gap-2">
      <Button variant="outline" className="h-11">
        <Filter className="h-4 w-4 mr-2" />
        Filter
      </Button>

      <div className="relative flex items-center max-w-[65vw] md:max-w-[50vw]">
        {/* Left scroll button */}
        {showLeftScroll && (
          <Button
            variant="outline"
            size="sm"
            className="absolute left-0 z-10 h-8 w-8 p-0 bg-primary shadow-md"
            onClick={scrollLeft}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        )}

        {/* Categories container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-2 pb-2 overflow-x-auto scrollbar-hide scroll-smooth"
          onScroll={checkScrollButtons}
          style={{
            paddingLeft: showLeftScroll ? "40px" : "0",
            paddingRight: showRightScroll ? "40px" : "0",
          }}
        >
          <Button
            variant={selectedCategory === "All Posts" ? "default" : "ghost"}
            className="h-11 whitespace-nowrap flex-shrink-0"
            onClick={() => setSelectedCategory("All Posts")}
          >
            <span className="max-w-[120px] truncate">All Posts</span>
          </Button>
          {categories.map((category: string) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "ghost"}
              className="h-11 whitespace-nowrap flex-shrink-0"
              onClick={() => setSelectedCategory(category)}
              title={category} // Show full text on hover
            >
              <span className="max-w-[120px] truncate">{category}</span>
            </Button>
          ))}
        </div>

        {/* Right scroll button */}
        {showRightScroll && (
          <Button
            variant="outline"
            size="sm"
            className="absolute right-0 z-10 h-8 w-8 p-0 bg-primary shadow-md"
            onClick={scrollRight}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default CategoriesSection;
