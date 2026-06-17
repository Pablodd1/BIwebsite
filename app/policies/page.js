"use client"

export default function PoliciesPage() {
  return (
    <main className="w-full h-screen">
      <iframe 
        src="/policies.pdf" 
        className="w-full h-full border-none"
        title="Políticas de Tratamiento de Información"
      />
    </main>
  );
}
