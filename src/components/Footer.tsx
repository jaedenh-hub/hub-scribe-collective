import { Link } from "react-router-dom";
import { categories } from "@/data/stories";

const Footer = () => {
  return (
    <footer className="bg-hub-deep border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center">
                <span className="font-display text-primary text-lg font-bold leading-none">H</span>
              </div>
              <span className="font-display text-lg font-semibold tracking-tight">
                <span className="text-primary">Hattiesburg</span>
                <span className="text-foreground ml-1">Hub</span>
              </span>
            </div>
            <p className="text-muted-foreground font-body text-sm max-w-md leading-relaxed">
              Your independent source for Hattiesburg news, community stories, and local culture. 
              Built by the community, for the community.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-xs font-medium tracking-wide text-muted-foreground mb-4">Sections</h4>
            <div className="flex flex-col gap-2">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/category/${cat.slug}`}
                  className="text-foreground/70 hover:text-primary transition-colors duration-300 font-body text-sm"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-xs font-medium tracking-wide text-muted-foreground mb-4">Connect</h4>
            <div className="flex flex-col gap-2 font-body text-sm">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">Contact Us</a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">Submit a Story</a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">Advertise</a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">About</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-hub-text-dim text-xs font-body">
            © 2026 Hattiesburg Hub. All rights reserved.
          </p>
          <p className="text-hub-text-dim text-xs font-body">
            Hattiesburg, Mississippi — The Hub City
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
