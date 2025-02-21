# 🌐 Projeto - Landing Page com Rastreio de UTMs

Este projeto é uma landing page que **preserva UTMs** ao longo da navegação e mantém um fluxo otimizado para usuários que chegam via campanhas de marketing.

---

## 📌 **Sumário**
- [📌 Objetivo](#-objetivo)
- [🚀 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [🛠️ Estrutura do Projeto](#️-estrutura-do-projeto)
- [🎯 Implementação das UTMs](#-implementação-das-utms)
- [🔄 Reutilização de Componentes](#-reutilização-de-componentes)
- [⚡ Melhorias na Performance](#-melhorias-na-performance)
- [🚀 Como Rodar o Projeto](#-como-rodar-o-projeto)

---

## 📌 **Objetivo**
Criar uma **landing page** otimizada para campanhas de marketing digital, garantindo que os parâmetros **UTM** sejam capturados e mantidos durante toda a navegação do usuário.

👉 **Principais funcionalidades:**
- **Preservação de UTMs** ao navegar entre páginas.
- **Roteamento com React Router**.
- **Organização modular** com componentes reutilizáveis.
- **Performance otimizada** evitando re-renders desnecessários.

---

## 🚀 **Tecnologias Utilizadas**
- **React.js** (Vite)
- **TypeScript**
- **React Router Dom**
- **CSS Modules / Styled Components** (caso necessário)

---

## 🛠️ **Estrutura do Projeto**
```plaintext
📂 src/
┣ 📂 components/ → Componentes reutilizáveis
┃ ┣ 📜 ButtonPulse.tsx
┃ ┣ 📜 Container.tsx
┃ ┣ 📜 Wrap.tsx
┃ ┗ 📜 Section.tsx
┣ 📂 hooks/ → Hooks personalizados
┃ ┗ 📜 GetAndPreserveUtm.tsx
┣ 📂 pages/ → Páginas do projeto
┃ ┣ 📜 Home.tsx
┃ ┗ 📜 Obrigado.tsx
┣ 📂 sections/ → Seções da Home
┃ ┣ 📜 Hero.tsx
┃ ┣ 📜 SecondSection.tsx
┃ ┗ 📜 Footer.tsx
┣ 📜 App.tsx → Configuração do Router
┣ 📜 main.tsx → Inicialização do React
┣ 📜 README.md → Documentação
┗ 📜 .gitignore
```

---

## 🎯 **Implementação das UTMs**
### 📅 **Fluxo de funcionamento:**
1. **Captura das UTMs** quando o usuário acessa o site.
2. **Armazena os valores no `localStorage`**.
3. **Preserva as UTMs na navegação**, garantindo que o usuário continue com os mesmos parâmetros ao mudar de página.

### 🛠️ **Código do hook `GetAndPreserveUTMs.tsx`**
```tsx
import { useEffect, ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface PreserveUTMsProps {
  children: ReactNode;
}

function GetAndPreserveUTMs({ children }: PreserveUTMsProps) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const storedUtm = localStorage.getItem("utmParams");
    let utmParams: Record<string, string> = storedUtm ? JSON.parse(storedUtm) : {};

    let hasNewUTMs = false;
    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach((utm) => {
      const value = urlParams.get(utm);
      if (value && utmParams[utm] !== value) {
        utmParams[utm] = value;
        hasNewUTMs = true;
      }
    });

    if (hasNewUTMs) {
      localStorage.setItem("utmParams", JSON.stringify(utmParams));
    }

    const updatedSearchParams = new URLSearchParams(urlParams);
    let hasUpdated = false;

    Object.entries(utmParams).forEach(([key, value]) => {
      if (!updatedSearchParams.has(key) || updatedSearchParams.get(key) !== value) {
        updatedSearchParams.set(key, value);
        hasUpdated = true;
      }
    });

    if (hasUpdated && location.search !== `?${updatedSearchParams.toString()}`) {
      navigate(`${location.pathname}?${updatedSearchParams.toString()}`, { replace: true });
    }
  }, [location.pathname]);

  return <>{children}</>;
}

export default GetAndPreserveUTMs;
```

---

## 🔄 **Reutilização de Componentes**
### 📅 **Principais Componentes**
- `Section.tsx` → Seções reutilizáveis
- `ButtonPulse.tsx` → Botão animado
- `Container.tsx` e `Wrap.tsx` → Layout responsivo

---

## ⚡ **Melhorias na Performance**
- **Evitamos re-renders desnecessários** no `GetAndPreserveUTMs.tsx`.
- **Melhor organização no `App.tsx`**, reduzindo reprocessamentos.

---

## 🚀 **Como Rodar o Projeto**
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
npm install
npm run dev
```
✅ Agora acesse: **http://localhost:5173/** 🚀

---

## 🛠 **Contribuições**
Sinta-se à vontade para contribuir, abrir issues ou sugerir melhorias!

📌 **Autor:** [Igor Fernandes](https://github.com/Fileroxx)

