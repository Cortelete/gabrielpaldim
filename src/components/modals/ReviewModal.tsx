import { useState, FormEvent } from "react";
import { Star, MessageSquare } from "lucide-react";
import BaseModal from "./BaseModal";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReviewModal({ isOpen, onClose }: ReviewModalProps) {
  const [rating, setRating] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleRating = (value: number) => {
    setRating(value);
    if (value === 5) {
      window.open("https://search.google.com/local/writereview?placeid=ChIJF87L2MRCzpQRYFISLka5unU", "_blank");
      onClose();
    } else {
      setShowFeedback(true);
    }
  };

  const handleFeedbackSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate sending email
    console.log("Feedback sent:", feedback);
    alert("Obrigado pelo seu feedback! Enviaremos para nossa equipe.");
    onClose();
  };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title={showFeedback ? "Feedback" : "Avaliação"}>
      {!showFeedback ? (
        <div className="flex flex-col items-center space-y-6 py-4 font-sans">
          <p className="text-gray-600 text-center text-sm">
            Sua opinião importa. Quantas estrelas?
          </p>
          <div className="flex gap-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleRating(star)}
                className="transition-transform hover:scale-110 focus:outline-none"
              >
                <Star
                  size={32}
                  className={`${
                    star <= rating ? "fill-[#B68C7B] text-[#B68C7B]" : "text-gray-300"
                  } transition-colors duration-200`}
                />
              </button>
            ))}
          </div>
        </div>
      ) : (
        <form onSubmit={handleFeedbackSubmit} className="space-y-4 font-sans">
          <p className="text-gray-600 text-sm">
            Conte-nos o que houve:
          </p>
          <textarea
            required
            rows={4}
            className="w-full bg-white border border-gray-200 rounded-sm p-3 text-sm text-gray-900 focus:outline-none focus:border-black transition-colors resize-none"
            placeholder="Sua mensagem..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-[#B68C7B] hover:bg-[#A07A6B] text-white font-medium py-3 px-4 rounded-sm flex items-center justify-center gap-2 transition-all shadow-lg"
          >
            <span className="uppercase text-xs tracking-widest">Enviar</span>
            <MessageSquare size={16} />
          </button>
        </form>
      )}
    </BaseModal>
  );
}
