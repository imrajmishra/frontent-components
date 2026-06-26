

export const codeBlocks1 = {
  button1: `
  <button
    className="group cursor-pointer relative block h-10 w-20 rounded-full bg-linear-to-br from-black to-neutral-600"
    type="submit"
  >
    Login
  </button>
`,

  button2: `
 <button
    className="relative w-15 h-8 z-10 rounded-xl  bg-blue-600 hover:bg-blue-800 shadow-none cursor-pointer"
    type="submit"
    >
      SignUp
    </button>
`,

  button3: `
  <button
     className="h-10 w-24 rounded-xl bg-green-600 text-white font-medium shadow-md transition-all duration-300 hover:bg-green-700 hover:-translate-y-1 cursor-pointer"
     type="submit"
  >
    Success
  </button>
`,
} as const;

export const codeBlocks2 = {
  button1: `
          <input
            className="border rounded-lg px-3 py-2"
            placeholder="Enter name"
          />`,
  button2: `
          <input
            className="border rounded-lg px-3 py-2"
            placeholder="Enter name"
          />`,
  button3: `
          <input
            className="border rounded-lg px-3 py-2"
            placeholder="Enter name"
          />`,
} as const;
     
export const codeBlocks3 = {
  button1: `
          <input
            className="border rounded-lg px-3 py-2"
            placeholder="Enter name"
          />`,
  button2: `
          <input
            className="border rounded-lg px-3 py-2"
            placeholder="Enter name"
          />`,
  button3: `
          <input
            className="border rounded-lg px-3 py-2"
            placeholder="Enter name"
          />`,
} as const;

export const codeBlocks4 = {
  button1: `
          <input
            className="border rounded-lg px-3 py-2"
            placeholder="Enter name"
          />`,
  button2: `
          <input
            className="border rounded-lg px-3 py-2"
            placeholder="Enter name"
          />`,
  button3: `
          <input
            className="border rounded-lg px-3 py-2"
            placeholder="Enter name"
          />`,
} as const;

          export const codeBlocks5 = {
            button1: `
          <input
            className="border rounded-lg px-3 py-2"
            placeholder="Enter name"
          />`,
            button2: `
          <input
            className="border rounded-lg px-3 py-2"
            placeholder="Enter name"
          />`,
            button3: `
          <input
            className="border rounded-lg px-3 py-2"
            placeholder="Enter name"
          />`,
          } as const;

export const codeBlocks6 = {
  button1: `
   <button
      type="button"
      className="flex items-center cursor-pointer gap-3 rounded-xl border 
      border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-700 shadow-sm 
      transition-all duration-300 hover:scale-105 hover:shadow-lg dark:border-zinc-800 
      dark:bg-zinc-950 dark:text-zinc-100"
    >
      <img
        src="https://images.shadcnspace.com/assets/svgs/icon-linkedin.svg"
        alt="LinkedIn"
        className="h-5 w-5"
      />
        Continue with LinkedIn
      </button>
`,
  button2: `
    <button 
      className="group cursor-pointer flex items-center gap-3 rounded-2xl border 
     border-white/10 bg-zinc-950 px-6 py-3 text-white transition-all duration-300 
      hover:-translate-y-1 hover:border-red-500/40 hover:shadow-[0_10px_30px_rgba(239,68,68,0.25)]"
    >
      <img
        src="https://images.shadcnspace.com/assets/svgs/icon-google.svg"
        alt=""
        className="h-5 w-5"
      />
        <span>Google</span>
    </button>
`,
  button3: `
    <button 
      className="group cursor-pointer flex items-center gap-3 rounded-2xl border 
      border-white/10 bg-zinc-950 px-6 py-3 text-white transition-all duration-300 
      hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_10px_30px_rgba(59,130,246,0.25)]"
    >
      <img
          src="https://images.shadcnspace.com/assets/svgs/icon-linkedin.svg"
          alt=""
          className="h-5 w-5"
      />
        <span>LinkedIn</span>
    </button>
`,
} as const;

export const codeBlocks7 = {
  button1: `
    <button className="group flex cursor-pointer items-center gap-3 rounded-2xl border 
     border-white/10 bg-zinc-950 px-6 py-3 text-white transition-all duration-300 
     hover:-translate-y-1 hover:border-white/40 hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)]">
     <img
        src="https://images.shadcnspace.com/assets/svgs/icon-github-white.svg"
        alt=""
        className="h-5 w-5"
      />
        <span>GitHub</span>
    </button>      
`,

  button2: `
  <div className="flex flex-wrap items-center  justify-center gap-4">
    {/* Google */}
      <button
        type="button"
        className="flex h-11 w-11 cursor-pointer items-center justify-center 
        rounded-xl border border-zinc-200 bg-white shadow-sm transition-all 
        duration-300 hover:scale-110 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950"
      >
        <img
          src="https://images.shadcnspace.com/assets/svgs/icon-google.svg"
          alt="Google"
          className="h-5 w-5"
        />
      </button>

    {/* GitHub */}
      <button
        type="button"
        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl
        border border-zinc-200 bg-white shadow-sm transition-all duration-300 
        hover:scale-110 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950"
      >
        <img
          src="https://images.shadcnspace.com/assets/svgs/icon-github.svg"
          alt="GitHub"
          className="h-5 w-5 dark:hidden"
          />
        <img
          src="https://images.shadcnspace.com/assets/svgs/icon-github-white.svg"
          alt="GitHub"
          className="hidden h-5 w-5 dark:block"
        />
        </button>

    {/* LinkedIn */}
      <button
        type="button"
        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl
        border border-zinc-200 bg-white shadow-sm transition-all duration-300 
        hover:scale-110 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950"
      >
        <img
          src="https://images.shadcnspace.com/assets/svgs/icon-linkedin.svg"
          alt="LinkedIn"
          className="h-5 w-5"
        />
      </button>

    {/* Facebook */}
      <button
        type="button"
        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl 
        border border-zinc-200 bg-white shadow-sm transition-all duration-300 
        hover:scale-110 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950"
      >
        <img
          src="https://images.shadcnspace.com/assets/svgs/icon-facebook.svg"
          alt="Facebook"
          className="h-5 w-5"
        />
          
      </button>
    </div>`,

  button3: `
    const socials = [
      {
        name: "Google",
        icon: "https://images.shadcnspace.com/assets/svgs/icon-google.svg",
      },
      {
        name: "GitHub",
        icon: "https://images.shadcnspace.com/assets/svgs/icon-github-white.svg",
      },
       {
        name: "LinkedIn",
        icon: "https://images.shadcnspace.com/assets/svgs/icon-linkedin.svg",
      },
       {
        name: "Facebook",
        icon: "https://images.shadcnspace.com/assets/svgs/icon-facebook.svg",
      },
    ];

    <div 
      className="flex flex-wrap gap-4">
        {socials.map((social) => (
          <button
            key={social.name}
            className="group cursor-pointer relative flex h-12 w-12 items-center 
            justify-center overflow-hidden rounded-2xl border border-white/10 
            bg-zinc-950 transition-all duration-300 hover:-translate-y-1 
            hover:scale-110 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]"
          >
            <span 
              className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent 
              opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
            />
            <img
              src={social.icon}
              alt={social.name}
              className="relative z-10 h-5 w-5"
            />
          </button>
        ))}
    </div>`,
} as const;
