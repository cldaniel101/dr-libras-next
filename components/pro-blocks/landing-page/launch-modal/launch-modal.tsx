"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { FaTelegram } from "react-icons/fa";
import { TELEGRAM_VIP_LINK } from "@/lib/links";

export function LaunchModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já fechou o modal antes (usando localStorage)
    // const hasSeenModal = localStorage.getItem("hasSeenLaunchModal");
    
    // if (!hasSeenModal) {
      // Pequeno delay para garantir que a página carregou completamente
      const timer = setTimeout(() => {
        setOpen(true);
      }, 500);
      
      return () => clearTimeout(timer);
    // }
  }, []);

  const handleClose = (open: boolean) => {
    setOpen(open);
    // Comentado: lógica para salvar no localStorage que o usuário já viu o modal
    // if (!open) {
    //   localStorage.setItem("hasSeenLaunchModal", "true");
    // }
  };

  const handleTelegramClick = () => {
    window.open(TELEGRAM_VIP_LINK, "_blank", "noopener,noreferrer");
    handleClose(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className="max-w-2xl p-8 sm:p-10"
        showCloseButton={true}
      >
        <DialogHeader className="space-y-4 text-center">
          <DialogTitle className="text-3xl font-bold leading-tight text-foreground sm:text-4xl text-center">
            <div className="text-[150px] display-block mb-4">🎉</div> Lançamento Especial!
          </DialogTitle>
          <DialogDescription className="text-lg leading-relaxed font-medium text-foreground text-center sm:text-xl">
            Estamos criando a maior união nacional de Surdos para conquistar direitos, benefícios e oportunidades para a comunidade. Entre no grupo VIP e faça parte da mudança.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center gap-6 pt-4">
          <Button
            onClick={handleTelegramClick}
            size="lg"
            className="w-full max-w-md bg-gradient-to-r from-[#0088cc] to-[#229ED9] text-white hover:from-[#0077b5] hover:to-[#1e8bc4] shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-semibold py-6"
          >
            <FaTelegram className="h-6 w-6" />
            Entrar no Grupo VIP do Telegram
          </Button>
          
          <p className="text-sm text-muted-foreground text-center">
            Junte-se à comunidade e seja parte desta transformação!
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

