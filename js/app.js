import '../css/styles.css';

const projects = [
    { name: 'Aurora Mobile', category: 'Produto digital', color: 'indigo', progress: 82, due: 'Entrega em 6 dias', people: ['MC', 'RL', 'AS'], desc: 'Nova experiência mobile para clientes.' },
    { name: 'Brand refresh 2026', category: 'Marketing', color: 'violet', progress: 64, due: 'Entrega em 12 dias', people: ['CS', 'MC'], desc: 'Identidade visual e guidelines da marca.' },
    { name: 'Dashboard analytics', category: 'Produto digital', color: 'emerald', progress: 48, due: 'Entrega em 18 dias', people: ['RL', 'AS', 'JP'], desc: 'Métricas que transformam dados em decisões.', span: 'lg:col-span-2' },
    { name: 'Onboarding 2.0', category: 'Produto digital', color: 'amber', progress: 35, due: 'Entrega em 23 dias', people: ['MC', 'JP'], desc: 'Fluxo de entrada mais simples e humano.' },
    { name: 'Campanha de verão', category: 'Marketing', color: 'rose', progress: 91, due: 'Entrega em 2 dias', people: ['CS', 'RL', 'MC'], desc: 'Conteúdo para redes e mídia paga.' },
    { name: 'Design system', category: 'Operações', color: 'sky', progress: 27, due: 'Entrega em 31 dias', people: ['AS', 'JP'], desc: 'Componentes escaláveis para todo o time.', span: 'sm:col-span-2 lg:col-span-2' }
];
const colorMap = { indigo: ['bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300', 'bg-indigo-500'], violet: ['bg-violet-50 text-violet-600 dark:bg-violet-500/15 dark:text-violet-300', 'bg-violet-500'], emerald: ['bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300', 'bg-emerald-500'], amber: ['bg-amber-50 text-amber-600 dark:bg-amber-500/15 dark:text-amber-300', 'bg-amber-500'], rose: ['bg-rose-50 text-rose-600 dark:bg-rose-500/15 dark:text-rose-300', 'bg-rose-500'], sky: ['bg-sky-50 text-sky-600 dark:bg-sky-500/15 dark:text-sky-300', 'bg-sky-500'] };
const grid = document.querySelector('#projectGrid');
function renderProjects(list = projects) { grid.innerHTML = list.map(p => { const c = colorMap[p.color]; return `<article class="project-card ${p.span || ''}"><span class="project-arrow text-lg text-indigo-500">↗</span><div><div class="mb-4 flex items-center justify-between"><span class="rounded-lg px-2.5 py-1 text-[10px] font-black ${c[0]}">${p.category}</span><span class="text-[11px] font-bold text-slate-400">•••</span></div><h3 class="text-base font-black">${p.name}</h3><p class="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">${p.desc}</p></div><div><div class="mb-2 mt-5 flex items-center justify-between text-[10px] font-bold"><span class="text-slate-400">Progresso</span><span class="text-slate-700 dark:text-slate-200">${p.progress}%</span></div><div class="h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10"><div class="h-full rounded-full ${c[1]} transition-all duration-700" style="width:${p.progress}%"></div></div><div class="mt-4 flex items-center justify-between"><div class="flex -space-x-2">${p.people.map((x, i) => `<span class="grid h-6 w-6 place-items-center rounded-full border-2 border-white bg-${['indigo', 'orange', 'emerald'][i % 3]}-100 text-[8px] font-black text-slate-600 dark:border-[#18213a]">${x}</span>`).join('')}</div><span class="text-[10px] font-semibold text-slate-400">${p.due}</span></div></div></article>` }).join(''); }
renderProjects();
const activities = [['MC', 'Marina atualizou o projeto', 'Aurora Mobile', 'há 12 min', 'indigo'], ['RL', 'Rafael concluiu uma tarefa em', 'Dashboard analytics', 'há 48 min', 'emerald'], ['CS', 'Camila comentou em', 'Brand refresh 2026', 'há 2h', 'violet'], ['JP', 'João entrou para a equipe', 'Design system', 'há 3h', 'amber']];
document.querySelector('#activityList').innerHTML = activities.map(a => `<div class="flex gap-3"><div class="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-${a[4]}-100 text-[9px] font-black text-${a[4]}-600 dark:bg-${a[4]}-500/20 dark:text-${a[4]}-300">${a[0]}</div><div class="min-w-0 text-xs leading-5"><p><b>${a[1]}</b> <span class="text-slate-500 dark:text-slate-400">${a[2]}</span></p><span class="text-[10px] text-slate-400">${a[3]}</span></div></div>`).join('');
document.querySelectorAll('.nav-item').forEach(link => {
  link.addEventListener('click', event => {
    const isProjectLink = link.getAttribute('href') === '#projetos';

    const isOverviewLink =
      link.getAttribute('href') === '#' &&
      !link.dataset.section;

    const isDemoSection = link.dataset.section;

    if (!isProjectLink && !isOverviewLink && !isDemoSection) {
      return;
    }

    event.preventDefault();

    document
      .querySelectorAll('.nav-item')
      .forEach(item => item.classList.remove('active'));

    link.classList.add('active');

    if (isDemoSection) {
      toast(
        `${link.textContent.trim()} selecionado — módulo demonstrativo`
      );
    }

    if (isProjectLink) {
      document
        .querySelector('#projetos')
        .scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
    }
  });
});

const sidebar = document.querySelector('#sidebar'), overlay = document.querySelector('#sidebarOverlay'); function toggleSide(open) { sidebar.classList.toggle('-translate-x-full', !open); overlay.classList.toggle('hidden', !open) } document.querySelector('#openSidebar').onclick = () => toggleSide(true); document.querySelector('#closeSidebar').onclick = () => toggleSide(false); overlay.onclick = () => toggleSide(false);
const menu = document.querySelector('#userMenu'); document.querySelector('#userButton').onclick = () => menu.classList.toggle('hidden');
document.addEventListener('click', e => { if (!e.target.closest('#userButton') && !e.target.closest('#userMenu')) menu.classList.add('hidden') });
const modal = document.querySelector('#projectModal'); const showModal = () => { modal.classList.remove('hidden'); modal.classList.add('flex'); setTimeout(() => modal.querySelector('input').focus(), 50) }; const hideModal = () => { modal.classList.add('hidden'); modal.classList.remove('flex') }; document.querySelector('#newProjectButton').onclick = showModal; document.querySelector('#closeModal').onclick = hideModal; document.querySelector('#cancelModal').onclick = hideModal; modal.onclick = e => { if (e.target === modal) hideModal() };
function toast(msg) { const t = document.querySelector('#toast'); t.textContent = msg; t.classList.remove('opacity-0', 'translate-y-[-16px]'); setTimeout(() => t.classList.add('opacity-0', 'translate-y-[-16px]'), 2800) }
document.querySelector('#projectForm').onsubmit = e => { e.preventDefault(); const form = e.currentTarget; let valid = true; form.querySelectorAll('[required]').forEach(input => { const field = input.closest('.field'); field.classList.toggle('invalid', !input.value.trim()); if (!input.value.trim()) valid = false }); if (!valid) { toast('Confira os campos obrigatórios.'); return } const data = new FormData(form); projects.unshift({ name: data.get('name'), category: data.get('category'), color: 'indigo', progress: 0, due: 'Novo projeto', people: ['MC'], desc: data.get('description') || 'Projeto recém-criado no workspace.', span: '' }); renderProjects(); form.reset(); hideModal(); toast('Projeto criado com sucesso!') };
document.querySelector('#searchInput').oninput = e => renderProjects(projects.filter(p => p.name.toLowerCase().includes(e.target.value.toLowerCase()) || p.category.toLowerCase().includes(e.target.value.toLowerCase())));
const themeBtn = document.querySelector('#themeButton');
const themeMenu = document.querySelector('#themeMenu');
const themeIcon = document.querySelector('#themeIcon');
const themeLabels = { light: 'Claro', dark: 'Escuro', system: 'Sistema' };
function applyTheme(theme, showMessage = false) {
    const dark = theme === 'dark' || (theme === 'system' && matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('techflow-theme', theme);
    themeIcon.textContent = theme === 'light' ? '☼' : theme === 'dark' ? '☾' : '◐';
    document.querySelectorAll('.theme-option').forEach(option => option.classList.toggle('selected', option.dataset.theme === theme));
    if (showMessage) toast(`Tema ${themeLabels[theme]} ativado`);
}
themeBtn.onclick = event => { event.stopPropagation(); themeMenu.classList.toggle('hidden') };
document.querySelectorAll('.theme-option').forEach(option => option.onclick = () => { applyTheme(option.dataset.theme, true); themeMenu.classList.add('hidden') });
document.addEventListener('click', event => { if (!event.target.closest('#themeButton') && !event.target.closest('#themeMenu')) themeMenu.classList.add('hidden') });
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => { if ((localStorage.getItem('techflow-theme') || 'system') === 'system') applyTheme('system') });
applyTheme(localStorage.getItem('techflow-theme') || 'system');
