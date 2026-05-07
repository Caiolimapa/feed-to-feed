import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, Eye, EyeOff } from "lucide-react";
import heroImg from "@/assets/hero-solidarity.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just navigate to home
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero section */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-8 pb-4 animate-fade-in">
        <div className="flex items-center gap-2 mb-2">
          <Heart className="h-8 w-8 text-primary fill-primary" />
          <h1 className="text-3xl font-bold text-foreground">Ajuda aí</h1>
        </div>
        <p className="text-muted-foreground text-center text-sm mb-6">
          Conectando corações a quem mais precisa
        </p>
        <img
          src={heroImg}
          alt="Pessoas se ajudando"
          width={320}
          height={240}
          className="w-64 md:w-80 h-auto"
        />
      </div>

      {/* Login form */}
      <div className="px-6 pb-8 pt-2 animate-slide-up">
        <form onSubmit={handleLogin} className="space-y-4 max-w-sm mx-auto">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          <Button type="submit" className="w-full text-base font-semibold h-12">
            Entrar
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            Não tem conta?{" "}
            <button type="button" className="text-primary font-medium underline">
              Cadastre-se
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
