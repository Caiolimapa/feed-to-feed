import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Phone, Mail, Globe, Heart, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getNgoById } from "@/data/ngos";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const NgoDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const ngo = getNgoById(id || "");
  const [copied, setCopied] = useState(false);

  if (!ngo) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">ONG não encontrada.</p>
      </div>
    );
  }

  const handleCopyPix = () => {
    if (ngo.pixKey) {
      navigator.clipboard.writeText(ngo.pixKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Header */}
      <div className="bg-primary px-6 pt-8 pb-6 rounded-b-[2rem]">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="text-sm">Voltar</span>
        </button>
        <h1 className="text-2xl font-bold text-primary-foreground">{ngo.name}</h1>
        <div className="flex items-center gap-1 text-primary-foreground/80 text-sm mt-2">
          <MapPin className="h-4 w-4" />
          <span>{ngo.location}</span>
        </div>
      </div>

      <div className="px-6 mt-6 space-y-6 animate-fade-in max-w-2xl mx-auto">
        {/* About */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary" />
            Sobre a ONG
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">{ngo.fullDescription}</p>
        </section>

        {/* Needs */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">O que precisamos</h2>
          <div className="flex flex-wrap gap-2">
            {ngo.needs.map((need) => (
              <Badge key={need} variant="secondary" className="bg-accent text-accent-foreground">
                {need}
              </Badge>
            ))}
          </div>
        </section>

        {/* Donation info */}
        <section className="bg-accent/50 rounded-xl p-5 border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-2">💛 Como Doar</h2>
          <p className="text-sm text-muted-foreground mb-4">{ngo.donationInfo}</p>
          {ngo.pixKey && (
            <div className="bg-card rounded-lg p-4 border border-border">
              <p className="text-xs text-muted-foreground mb-1">Chave PIX (CNPJ):</p>
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-sm text-foreground font-medium">{ngo.pixKey}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopyPix}
                  className="flex-shrink-0"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-secondary" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          )}
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Contato</h2>
          <div className="space-y-3">
            <a
              href={`tel:${ngo.phone}`}
              className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4 text-primary" />
              {ngo.phone}
            </a>
            <a
              href={`mailto:${ngo.email}`}
              className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4 text-primary" />
              {ngo.email}
            </a>
            <a
              href={`https://${ngo.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors"
            >
              <Globe className="h-4 w-4 text-primary" />
              {ngo.website}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NgoDetail;
