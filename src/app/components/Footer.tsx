export default function Footer() {
  return (
    <footer className="footer border border-t-[#33353F] border-x-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span className="z-10">
          <img className="h-3 mr-2 sm:h-6" src="/images/logo.svg" alt="logo" />
        </span>
        <p className="text-slate-600">All rights resereved.</p>
      </div>
    </footer>
  );
}
