import './style.css'

const sidebar = document.getElementById('sidebar');
const toggleSidebarBtn = document.getElementById('toggleSidebar');
const closeSidebarBtn = document.getElementById('closeSidebar');

function toggleSidebar() {
    sidebar.classList.toggle('-translate-x-full');
}

toggleSidebarBtn.addEventListener('click', toggleSidebar);
closeSidebarBtn.addEventListener('click', toggleSidebar);

const userMenuButton = document.getElementById('userMenuButton');
const userDropdown = document.getElementById('userDropdown');

userMenuButton.addEventListener('click', (e) => {
    e.stopPropagation();
    userDropdown.classList.toggle('hidden');
});

window.addEventListener('click', () => {
    if (!userDropdown.classList.contains('hidden')) {
        userDropdown.classList.add('hidden');
    }
});

const modal = document.getElementById('projectModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const cancelModalBtn = document.getElementById('cancelModalBtn');

function toggleModal() {
    modal.classList.toggle('hidden');
}

openModalBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);
cancelModalBtn.addEventListener('click', toggleModal);

const form = document.getElementById('projectForm');
const projName = document.getElementById('projName');
const projOwner = document.getElementById('projOwner');
const projCategory = document.getElementById('projCategory');
const projDate = document.getElementById('projDate');
const projDesc = document.getElementById('projDesc');

const errorName = document.getElementById('errorName');
const errorOwner = document.getElementById('errorOwner');
const errorCategory = document.getElementById('errorCategory');
const errorDate = document.getElementById('errorDate');
const errorDesc = document.getElementById('errorDesc');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    if (projName.value.trim() === '') {
        projName.classList.add('border-red-500');
        errorName.classList.remove('hidden');
        isValid = false;
    } else {
        projName.classList.remove('border-red-500');
        errorName.classList.add('hidden');
    }

    if (projOwner.value.trim() === '') {
        projOwner.classList.add('border-red-500');
        errorOwner.classList.remove('hidden');
        isValid = false;
    } else {
        projOwner.classList.remove('border-red-500');
        errorOwner.classList.add('hidden');
    }

    if (projCategory.value === '') {
        projCategory.classList.add('border-red-500');
        errorCategory.classList.remove('hidden');
        isValid = false;
    } else {
        projCategory.classList.remove('border-red-500');
        errorCategory.classList.add('hidden');
    }

    if (projDate.value === '') {
        projDate.classList.add('border-red-500');
        errorDate.classList.remove('hidden');
        isValid = false;
    } else {
        projDate.classList.remove('border-red-500');
        errorDate.classList.add('hidden');
    }

    if (projDesc.value.trim() === '') {
        projDesc.classList.add('border-red-500');
        errorDesc.classList.remove('hidden');
        isValid = false;
    } else {
        projDesc.classList.remove('border-red-500');
        errorDesc.classList.add('hidden');
    }

    if (isValid) {
        alert('Projeto cadastrado com sucesso!');
        form.reset();
        toggleModal();
    }
});

const themeSelector = document.getElementById('themeSelector');

function applyTheme(theme) {
    const root = document.documentElement;
    
    if (theme === 'dark') {
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else if (theme === 'light') {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.removeItem('theme');
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }
}

if (!localStorage.theme) {
    themeSelector.value = 'system';
} else if (localStorage.theme === 'dark') {
    themeSelector.value = 'dark';
} else {
    themeSelector.value = 'light';
}

themeSelector.addEventListener('change', (e) => {
    applyTheme(e.target.value);
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        if (e.matches) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }
});