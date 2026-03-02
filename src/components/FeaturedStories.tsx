import StoryCard from "./StoryCard";
import { featuredStories, stories } from "@/data/stories";

const FeaturedStories = () => {
  const mainStory = featuredStories[0];
  const sideStories = featuredStories.slice(1, 4);
  const recentStories = stories.slice(3, 6);

  return (
    <section className="py-16 bg-hub-deep">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="font-display text-2xl font-bold text-foreground">Featured</h2>
          <div className="flex-1 h-[1px] bg-border/50" />
          <span className="font-display text-xs font-medium tracking-wide text-muted-foreground">This Week</span>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Large featured story */}
          <div className="lg:col-span-7">
            <StoryCard story={mainStory} variant="large" />
          </div>

          {/* Side stories */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {sideStories.map((story) => (
              <StoryCard key={story.id} story={story} variant="horizontal" />
            ))}

            {/* Divider */}
            <div className="h-[1px] bg-border/50" />

            {/* More Stories heading */}
            <h3 className="font-display text-xs font-medium tracking-wide text-muted-foreground">More Stories</h3>
            {recentStories.map((story) => (
              <StoryCard key={story.id} story={story} variant="horizontal" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStories;
