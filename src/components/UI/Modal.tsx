type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

const Modal = ({
  open,
  onClose,
  title,
  children,
}: ModalProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-xl rounded-xl bg-surface">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-app-border px-5 py-4">
          <h2 className="text-lg font-semibold text-app-text">
            {title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="text-app-text-muted hover:text-app-text"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        {children}

      </div>
    </div>
  );
};

export default Modal;