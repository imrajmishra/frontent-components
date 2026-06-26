import { useState } from "react";
import { Copy, Check, X } from "lucide-react";

interface CodeBoxProps {
  code: string;
  onClose?: () => void;
}

export default function CodeBox({ code, onClose }: CodeBoxProps) {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-md">
      <div className="relative w-full max-w-2xl ">
        <div className="relative rounded border-2 border-dashed border-neutral-300 bg-[#fbfbf8] p-8 shadow-2xl">
          <button
            onClick={onClose}
            className="absolute right-3 top-3 cursor-pointer flex items-center gap-2 rounded-md bg-zinc-800 px-3 py-1.5 text-white"
          >
            <X size={20} />
          </button>

          <button
            onClick={copyCode}
            className="absolute right-15 top-3 flex items-center gap-2 rounded-md bg-zinc-800 px-3 py-1.5 text-white"
          >
            {copied ? <Check size={20} /> : <Copy size={20} />}
          </button>

          <pre className="overflow-x-auto rounded-lg bg-zinc-950 p-10 mt-6 text-white">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
