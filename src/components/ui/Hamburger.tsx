interface HamburgerButtonProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export default function HamburgerButton({
  toggleSidebar,
  isSidebarOpen,
}: HamburgerButtonProps) {
  return (
    <div className="rounded-md border-[2px] border-[#535f72] p-[2px]">
      <button
        title="Toggle sidebar"
        onClick={toggleSidebar}
        className="relative flex h-[32px] w-[28px] cursor-pointer flex-col items-center justify-center"
      >
        <span
          className={`absolute h-[3px] w-[20px] rounded bg-white transition-transform duration-300 ${isSidebarOpen ? "rotate-45" : "-translate-y-[6px]"}`}
        />
        <span
          className={`absolute h-[3px] w-[20px] rounded bg-white transition-opacity duration-300 ${isSidebarOpen ? "opacity-0" : "opacity-100"}`}
        />
        <span
          className={`absolute h-[3px] w-[20px] rounded bg-white transition-transform duration-300 ${isSidebarOpen ? "-rotate-45" : "translate-y-[6px]"}`}
        />
      </button>
    </div>
  );
}
