import { useNavigate } from "react-router-dom";
import { Heart, Search, Baby, Home, Apple, HeartHandshake } from "lucide-react";
import { Input } from "@/components/ui/input";
import { categories } from "@/data/ngos";
import { useState } from "react";

import catOrphanage from "@/assets/cat-orphanage.png";
import catHomeless from "@/assets/cat-homeless.png";
import catFoodbank from "@/assets/cat-foodbank.png";
import catElderly from "@/assets/cat-elderly.png";

const categoryImages: Record<string, string> = {
  orphanage: catOrphanage,
  homeless: catHomeless,
  foodbank: catFoodbank,
  elderly: catElderly,
};

const categoryIcons: Record<string, React.ElementType> = {
  Baby: Baby,
  Home: Home,
  Apple: Apple,
  Heart: HeartHandshake,
};

const HomePage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filtered = categories.filter((cat) =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <div className="bg-primary px-6 pt-8 pb-12 rounded-b-[2rem]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-primary-foreground/80 text-sm">Bem-vindo ao</p>
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary-foreground fill-primary-foreground" />
              <h1 className="text-2xl font-bold text-primary-foreground">Ajuda aí</h1>
            </div>
          </div>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar categorias..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 bg-card border-0 h-11"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-6 -mt-4">
        <h2 className="text-lg font-semibold text-foreground mb-4 mt-8">Categorias de ONGs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filtered.map((cat, index) => {
            const Icon = categoryIcons[cat.icon] || Heart;
            return (
              <button
                key={cat.id}
                onClick={() => navigate(`/category/${cat.id}`)}
                className="bg-card rounded-xl p-4 shadow-sm border border-border hover:shadow-md transition-all text-left animate-slide-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-3">
                  <img
                    src={categoryImages[cat.image]}
                    alt={cat.name}
                    loading="lazy"
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="h-4 w-4 text-primary flex-shrink-0" />
                      <h3 className="font-semibold text-foreground text-sm truncate group-hover:text-primary transition-colors">
                        {cat.name}
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {cat.description}
                    </p>
                    <span className="text-xs text-primary font-medium mt-2 inline-block">
                      {cat.count} ONGs →
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
