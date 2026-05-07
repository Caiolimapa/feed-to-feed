import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";
import { getNgosByCategory, getCategoryById } from "@/data/ngos";

const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const category = getCategoryById(id || "");
  const ngos = getNgosByCategory(id || "");

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Categoria não encontrada.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <div className="bg-primary px-6 pt-8 pb-6 rounded-b-[2rem]">
        <button
          onClick={() => navigate("/home")}
          className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="text-sm">Voltar</span>
        </button>
        <h1 className="text-2xl font-bold text-primary-foreground">{category.name}</h1>
        <p className="text-primary-foreground/80 text-sm mt-1">{category.description}</p>
      </div>

      {/* NGO List */}
      <div className="px-6 mt-6 space-y-4">
        {ngos.map((ngo, index) => (
          <button
            key={ngo.id}
            onClick={() => navigate(`/ngo/${ngo.id}`)}
            className="w-full bg-card rounded-xl p-5 shadow-sm border border-border hover:shadow-md transition-all text-left animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <h3 className="font-semibold text-foreground text-base mb-1">{ngo.name}</h3>
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{ngo.description}</p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3 text-primary" />
              <span className="truncate">{ngo.location}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
