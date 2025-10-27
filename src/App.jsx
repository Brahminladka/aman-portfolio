import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-slate-100 antialiased">
      <header className="max-w-4xl mx-auto p-6">
        <nav className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Aman Dinesh Tiwari</h1>
            <p className="text-sm text-slate-400">Aspiring Data Engineer & AI Enthusiast</p>
          </div>
          <div className="flex gap-3 items-center">
            <a href="https://github.com/Brahminladka" target="_blank" rel="noreferrer" className="text-sm hover:underline">GitHub</a>
            <a href="https://linkedin.com/in/aman-tiwari-86b618229" target="_blank" rel="noreferrer" className="text-sm hover:underline">LinkedIn</a>
            <a href="mailto:aman12tiwari3@gmail.com" className="btn px-3 py-2 rounded-md text-sm bg-slate-800 hover:bg-slate-700">Email</a>
            <a href="9699353591"className="btn px-3 py-2 rounded-md text-sm bg-slate-800 hover:bg-slate-700">Contact</a>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-12">
        <section className="mt-6 bg-slate-800/40 rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-semibold">Hi — I’m Aman.</h2>
          <p className="mt-3 text-slate-300 leading-relaxed">
            Aspiring Data Engineer and AI Enthusiast with hands-on experience in Machine Learning,
            Web Scraping, and Data Analytics. Passionate about turning data into actionable insights.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/Aman_Tiwari_cv.docx" className="inline-block px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-sm font-medium">Download CV</a>
            <a href="#projects" className="inline-block px-4 py-2 rounded-md border border-slate-600 text-sm">View Projects</a>
          </div>
        </section>

        <section id="projects" className="mt-8">
          <h3 className="text-xl font-semibold">Selected Projects</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">

            <article className="rounded-xl p-4 bg-slate-800/30">
              <h4 className="font-medium">Document Question Answering (GenAI)</h4>
              <p className="text-slate-400 text-sm mt-1">AI-powered app for document-based Q&A using Streamlit, LLaMA, and ChromaDB.</p>
              <div className="mt-3 flex gap-2">
                <a className="text-sm underline" href="https://document-question-answering-2025.streamlit.app/#get-started" target="_blank" rel="noreferrer">Live</a>
                <a className="text-sm underline" href="https://github.com/Brahminladka/Document-Question-Answering-GenAI-main.git" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </article>

            <article className="rounded-xl p-4 bg-slate-800/30">
              <h4 className="font-medium">Company Employee, Task & Attendance Management</h4>
              <p className="text-slate-400 text-sm mt-1">Django-based company management system with task and attendance tracking.</p>
              <a className="text-sm underline" href="https://github.com/Brahminladka/Company-employee-Task-Attendance-Management.git" target="_blank" rel="noreferrer">GitHub</a>
            </article>

            <article className="rounded-xl p-4 bg-slate-800/30">
              <h4 className="font-medium">Flask To-Do App</h4>
              <p className="text-slate-400 text-sm mt-1">Simple Flask CRUD application for managing daily tasks.</p>
              <a className="text-sm underline" href="https://github.com/Brahminladka/To-Do-Task-List.git" target="_blank" rel="noreferrer">GitHub</a>
            </article>

            <article className="rounded-xl p-4 bg-slate-800/30">
              <h4 className="font-medium">Web Scraping & Data Structuring</h4>
              <p className="text-slate-400 text-sm mt-1">Selenium and BeautifulSoup-based data scraping pipelines for structured output.</p>
              <a className="text-sm underline" href="https://github.com/Brahminladka/web-scraping-data-structuring.git" target="_blank" rel="noreferrer">GitHub</a>
            </article>
          </div>
        </section>

        <footer className="mt-8 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Aman Dinesh Tiwari — Built with React & Tailwind
        </footer>
      </main>
    </div>
  );
}
